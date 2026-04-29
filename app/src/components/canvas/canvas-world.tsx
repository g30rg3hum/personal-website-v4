interface Props {
  x: number;
  y: number;
  zoom: number;
  children: React.ReactNode;
}

export default function CanvasWorld({ x, y, zoom, children }: Props) {
  return (
    <div
      className="absolute origin-top-left"
      // translate within the viewport
      style={{ transform: `translate(${x}px, ${y}px) scale(${zoom})` }}
    >
      {children}
    </div>
  );
}
