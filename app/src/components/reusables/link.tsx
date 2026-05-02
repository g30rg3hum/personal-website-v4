interface Props {
  href: string;
  children: React.ReactNode;
}
export default function Link({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sky-500"
      onPointerDown={(e) => e.stopPropagation()}
    >
      {children}
    </a>
  );
}
