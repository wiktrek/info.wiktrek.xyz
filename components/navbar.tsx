import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <main className=" items-center justify-center text-right text-6xl no-underline">
        <div className=" grid grid-cols-1">
          <Link href="/">Return</Link>
        </div>
      </main>
    </>
  );
}
