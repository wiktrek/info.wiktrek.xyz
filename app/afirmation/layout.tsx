export const metadata = {
  title: "afirmation - wiktrek.xyz",
  description: "info.wiktrek.xyz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
