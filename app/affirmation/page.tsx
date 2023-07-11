import axios from "axios";
import Head from "next/head";
import "../../styles/globals.css";
import Navbar from "~/components/navbar";
// import Link from "next/link";
interface Affirmation {
  affirmation: string;
}
export default async function Page() {
  "use client";
  const a = (await axios.get("https://www.affirmations.dev/"))
    .data as Affirmation;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="items-center justify-center text-center">
        <Navbar />
        <a className=" text-7xl text-red-400">{a.affirmation}</a>
      </main>
    </>
  );
}
