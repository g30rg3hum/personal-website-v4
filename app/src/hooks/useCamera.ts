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
  // desktop panning
  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === "touch") return;

      isPanning.current = true;
      // offset/gap between mouse and canvas origin
      panStart.current = { x: e.clientX - camera.x, y: e.clientY - camera.y };
    },
    [camera.x, camera.y],
  );

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPanning.current || e.pointerType === "touch") return;
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

  // for mobile zoom + pan
  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 1) {
        // single finger pan
        const touch = e.touches[0];

        // for detecting first frame and set start point
        // instead of relying on separate event
        if (lastTouchDist.current === null) {
          panStart.current = {
            x: touch.clientX - camera.x,
            y: touch.clientY - camera.y,
          };

          lastTouchDist.current = 0;
        }

        setCamera((prev) => ({
          ...prev,
          x: touch.clientX - panStart.current.x,
          y: touch.clientY - panStart.current.y,
        }));
      } else if (e.touches.length === 2) {
        // pinch zoom
        const dist = getTouchDistance(e.touches);

        // sets the first frame
        if (lastTouchDist.current && lastTouchDist.current > 0) {
          const scale = dist / lastTouchDist.current;
          setCamera((prev) => {
            const newZoom = Math.min(
              Math.max(prev.zoom * scale, minZoom),
              maxZoom,
            );
            return { ...prev, zoom: newZoom };
          });
        }

        lastTouchDist.current = dist;
      }
    },
    [camera.x, camera.y],
  );

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
