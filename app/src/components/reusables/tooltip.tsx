interface Props {
  label: string;
  children: React.ReactNode;
}
export default function Tooltip({ label, children }: Props) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-sm rounded-lg py-1 px-2 pointer-events-none whitespace-nowrap">
        {label}
      </div>
    </div>
  );
}
