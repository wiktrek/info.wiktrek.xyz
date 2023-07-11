import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/navbar";

export default function Page() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" h-screen items-center justify-center text-center text-6xl  no-underline">
        <Navbar />
        <div className=" grid grid-cols-1">
          <Link href="/stuff/" className="">
            Stuff
          </Link>
        </div>
      </main>
    </>
  );
}
