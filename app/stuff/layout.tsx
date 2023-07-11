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
      <body className=" bg-[#0D0A0B] text-[#FA9F42]">{children}</body>
    </html>
  );
}
