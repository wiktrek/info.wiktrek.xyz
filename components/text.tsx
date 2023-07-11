import Head from "next/head";
import Navbar from "./navbar";
interface Props {
  text: string;
}
export default function Text(props: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="items-center justify-center text-center">
        <Navbar />
        <a className=" text-7xl text-red-400">{props.text}</a>
      </main>
    </>
  );
}
