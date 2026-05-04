import { projectPositions, sectionPositions } from "../../constants/sections";
import { useCamera } from "../../hooks/useCamera";
import useElementSize from "../../hooks/useElementSize";
import Detach from "../content/projects/detach";
import Sip from "../content/projects/sip";
import Songdle from "../content/projects/songdle";
import Start from "../content/start";
import Navigation from "../layout/navigation";
import CanvasWorld from "./canvas-world";
import Section from "./section";

export default function CanvasViewport() {
  const {
    camera,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onWheel,
    onTouchEnd,
    onTouchMove,
    panTo,
  } = useCamera();

  // sizes of each section
  const { ref: startRef, size: startSize } = useElementSize<HTMLDivElement>();
  const { ref: detachRef, size: detachSize } = useElementSize<HTMLDivElement>();

  return (
    <div
      className="w-screen h-screen overflow-hidden relative text-sm"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onWheel={onWheel}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        backgroundColor: "#f5f5f5",
        backgroundImage:
          "radial-gradient(circle, #e7e7e7 1px, transparent 1px)",
        backgroundSize: `${30 * camera.zoom}px ${30 * camera.zoom}px`,
        backgroundPosition: `${camera.x}px ${camera.y}px`,
      }}
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
      </CanvasWorld>
    </div>
  );
}
