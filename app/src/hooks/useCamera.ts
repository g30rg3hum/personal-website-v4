import { useCallback, useRef, useState } from "react";

const maxZoom = 2;
const minZoom = 0.5;

export function useCamera() {
  const [camera, setCamera] = useState({
    // at the center
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    zoom: 1,
  });
  // need to persist, but don't want re-render when they change
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });

  // compare to know if fingers moved closer or apart
  const lastTouchDist = useRef<number | null>(null);

  // keep same reference
  // unless camera changes
  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      isPanning.current = true;
      // offset/gap between mouse and canvas origin
      panStart.current = { x: e.clientX - camera.x, y: e.clientY - camera.y };
    },
    [camera.x, camera.y],
  );

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPanning.current) return;
    // get the new camera position and set it
    // preserves the gap between mouse and canvas origin
    // moves canvas with mouse
    setCamera((prev) => ({
      ...prev,
      x: e.clientX - panStart.current.x,
      y: e.clientY - panStart.current.y,
    }));
  }, []);

  const onPointerUp = useCallback(() => {
    isPanning.current = false;
  }, []);

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();

    // smooth and gradual zooming
    const zoomFactor = 0.999 ** e.deltaY;

    setCamera((prev) => {
      const newZoom = Math.min(
        Math.max(prev.zoom * zoomFactor, minZoom),
        maxZoom,
      );

      return { ...prev, zoom: newZoom };
    });
  }, []);

  const getTouchDistance = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;

    return Math.sqrt(dx * dx + dy * dy);
  };

  // for two pointers
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 2) return;

    const dist = getTouchDistance(e.touches);

    // sets the first frame
    if (lastTouchDist.current !== null) {
      const scale = dist / lastTouchDist.current;
      setCamera((prev) => {
        const newZoom = Math.min(Math.max(prev.zoom * scale, minZoom), maxZoom);
        return { ...prev, zoom: newZoom };
      });
    }

    lastTouchDist.current = dist;
  }, []);

  const onTouchEnd = useCallback(() => {
    lastTouchDist.current = null;
  }, []);

  return {
    camera,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onWheel,
    onTouchMove,
    onTouchEnd,
  };
}
