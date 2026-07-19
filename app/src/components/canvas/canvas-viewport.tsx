import { projectPositions, sectionPositions } from "../../constants/sections";
import { useCamera, maxZoom, minZoom } from "../../hooks/useCamera";
import useElementSize from "../../hooks/useElementSize";
import Detach from "../content/projects/detach";
import KTool from "../content/projects/k-tool";
import Sip from "../content/projects/sip";
import Songdle from "../content/projects/songdle";
import Tairun from "../content/projects/tairun";
import Start from "../content/start";
import Navigation from "../layout/navigation";
import CanvasWorld from "./canvas-world";
import Section from "./section";
import { useRef, useEffect } from "react";

export default function CanvasViewport() {
  const {
    camera,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    // onWheel,
    onTouchEnd,
    onTouchMove,
    panTo,
    setCamera,
  } = useCamera();

  // sizes of each section
  const { ref: startRef, size: startSize } = useElementSize<HTMLDivElement>();
  const { ref: detachRef, size: detachSize } = useElementSize<HTMLDivElement>();

  // viewport ref
  const viewportRef = useRef<HTMLDivElement | null>(null);
  // assign onWheel non-passive listener
  useEffect(() => {
    const viewportEl = viewportRef.current;
    if (!viewportEl) return;

    const wheelHandler = (e: WheelEvent) => {
      // stops default behaviour e.g. browser zoom and h/v scroll
      e.preventDefault();

      const zoomIntensity = e.ctrlKey ? 0.99 : 0.999;
      const zoomFactor = zoomIntensity ** e.deltaY;
      // console.log(`ctrlKey: ${e.ctrlKey}, zoomFactor: ${zoomFactor}`);

      setCamera((prev) => {
        const newZoom = Math.min(
          Math.max(prev.zoom * zoomFactor, minZoom),
          maxZoom,
        );

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const newX = mouseX - (mouseX - prev.x) * (newZoom / prev.zoom);
        const newY = mouseY - (mouseY - prev.y) * (newZoom / prev.zoom);

        return { ...prev, zoom: newZoom, x: newX, y: newY };
      });
    };

    viewportEl.addEventListener("wheel", wheelHandler, { passive: false });
    return () => {
      viewportEl.removeEventListener("wheel", wheelHandler);
    };
  }, [setCamera]);

  return (
    <div
      className="w-screen h-screen overflow-hidden relative text-sm"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      // onWheel={onWheel}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        backgroundColor: "#f5f5f5",
        backgroundImage:
          "radial-gradient(circle, #e7e7e7 1px, transparent 1px)",
        backgroundSize: `${30 * camera.zoom}px ${30 * camera.zoom}px`,
        backgroundPosition: `${camera.x}px ${camera.y}px`,
      }}
      ref={viewportRef}
    >
      {/* sticky navigation */}
      <Navigation panTo={panTo} />

      {/* canvas items */}
      <CanvasWorld x={camera.x} y={camera.y} zoom={camera.zoom}>
        <Section
          ref={startRef}
          x={sectionPositions.start.x - startSize.width / 2}
          y={sectionPositions.start.y - startSize.height / 2}
        >
          <Start />
        </Section>

        {/* projects */}
        <Section
          ref={detachRef}
          x={projectPositions.detach.x - detachSize.width / 2}
          y={projectPositions.detach.y}
        >
          <Detach />
        </Section>

        <Section x={projectPositions.sip.x} y={projectPositions.sip.y}>
          <Sip />
        </Section>

        <Section x={projectPositions.songdle.x} y={projectPositions.songdle.y}>
          <Songdle />
        </Section>

        <Section x={projectPositions.kTool.x} y={projectPositions.kTool.y}>
          <KTool />
        </Section>

        <Section x={projectPositions.tairun.x} y={projectPositions.tairun.y}>
          <Tairun />
        </Section>
      </CanvasWorld>
    </div>
  );
}
