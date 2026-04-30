interface Props {
  x: number;
  y: number;
  ref?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
  onLoad?: () => void;
}

export default function Section({ x, y, ref, children, onLoad }: Props) {
  return (
    <div
      ref={ref}
      className="absolute select-none"
      style={{ left: x, top: y }}
      onLoad={onLoad}
    >
      {children}
    </div>
  );
}
