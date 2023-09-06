import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>info - wiktrek.xyz</title>
        <meta name="description" content="random projects." />
      </Head>
      <main className=" h-screen items-center justify-center text-center text-6xl  no-underline">
        <div className=" grid grid-cols-1">
          <Link href="/apis" className="">
            Apis
          </Link>
          <Link href="/stuff" className="">
            Stuff
          </Link>
        </div>
      </main>
    </>
  );
}
