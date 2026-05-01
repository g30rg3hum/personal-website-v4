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

  const animationFrameRef = useRef<number | null>(null);

  // keep same reference
  // unless camera changes
  // desktop panning
  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

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

      // adjust position so point under cursor is fixed
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      // how far into the canvas is my mouse
      // scaled by how much the zoom has changed
      // start at cursor, go back by the distance, that's where origin sits
      const newX = mouseX - (mouseX - prev.x) * (newZoom / prev.zoom);
      const newY = mouseY - (mouseY - prev.y) * (newZoom / prev.zoom);

      return { ...prev, zoom: newZoom, x: newX, y: newY };
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
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

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

        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

        // sets the first frame
        if (lastTouchDist.current && lastTouchDist.current > 0) {
          const scale = dist / lastTouchDist.current;
          setCamera((prev) => {
            const newZoom = Math.min(
              Math.max(prev.zoom * scale, minZoom),
              maxZoom,
            );

            // use midpoint between two fingers == cursor
            const newX = midX - (midX - prev.x) * (newZoom / prev.zoom);
            const newY = midY - (midY - prev.y) * (newZoom / prev.zoom);
            return { x: newX, y: newY, zoom: newZoom };
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

  const panTo = useCallback(
    (worldX: number, worldY: number, duration = 500) => {
      // cancel any in-progress animation
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);

      // camera.x/y: shift from top left of screen
      const startX = camera.x;
      const startY = camera.y;
      const startTime = performance.now();

      // start at screen center
      // world coordinate scaled to zoom
      // camera moves and world content position in opposite direction
      const targetX = window.innerWidth / 2 - worldX * camera.zoom;
      const targetY = window.innerHeight / 2 - worldY * camera.zoom;

      // takes t (0 - 1) so motion starts slow, speeds up, then slows down
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        setCamera((prev) => ({
          ...prev,
          // travel the distance eased
          x: startX + (targetX - startX) * eased,
          y: startY + (targetY - startY) * eased,
        }));

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          animationFrameRef.current = null;
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    },
    [camera.x, camera.y, camera.zoom],
  );

  return {
    camera,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onWheel,
    onTouchMove,
    onTouchEnd,
    panTo,
  };
}
