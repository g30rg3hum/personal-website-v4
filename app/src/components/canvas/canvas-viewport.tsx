import { useCamera } from "../../hooks/useCamera";
import StartSection from "../content/start-section";
import CanvasWorld from "./canvas-world";

export default function CanvasViewport() {
  const {
    camera,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onWheel,
    onTouchEnd,
    onTouchMove,
  } = useCamera();

  return (
    <div
      className="w-screen h-screen overflow-hidden relative touch-none"
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
      <CanvasWorld x={camera.x} y={camera.y} zoom={camera.zoom}>
        <StartSection />
      </CanvasWorld>
    </div>
  );
}
