import Link from "next/link";
import Navbar from "~/components/navbar";

export default function Page() {
  return (
    <>
      <main className=" h-screen items-center justify-center text-center text-6xl  no-underline">
        <Navbar />
        <div className=" grid grid-cols-1">
          <Link href="/stuff/rating" className="">
            Rating
          </Link>
        </div>
      </main>
    </>
  );
}
