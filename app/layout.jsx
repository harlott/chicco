export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <title>Chicco Allotta: pianist in London!</title>
      <meta name="description" content="Chicco Allotta is a pianist based in London." />
      <body>{children}</body>
    </html>
  );
}
