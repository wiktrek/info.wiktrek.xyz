export const metadata = {
  title: "Stuff - wiktrek.xyz",
  description: "info.wiktrek.xyz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-[#161718] text-[#0cabc0]">{children}</body>
    </html>
  );
}