import "./../globals.css";

export default function DotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body className="bg-black">{children}</body>
    </html>
  );
}
