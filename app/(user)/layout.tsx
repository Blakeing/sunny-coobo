import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header>Header</header>
        <div>Banner</div>
        {children}
      </body>
    </html>
  );
}
