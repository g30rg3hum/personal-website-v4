interface Props {
  children: React.ReactNode;
}

export default function Badge({ children }: Props) {
  return (
    <div className="px-4 py-3 bg-black/5 font-bold rounded-lg flex gap-3 items-center">
      {children}
    </div>
  );
}
