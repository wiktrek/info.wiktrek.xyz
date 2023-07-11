import axios, { type AxiosResponse } from "axios";
import Head from "next/head";
import "../../styles/globals.css";
// import Link from "next/link";
interface Joke {
  joke: string;
}
export default async function Page() {
  //   const a = (await axios.get("https://icanhazdadjoke.com")).data as Joke;
  const a: AxiosResponse<Joke> = await axios({
    url: "http://icanhazdadjoke.com",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  //   console.log(a.data);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="items-center justify-center text-center">
        <a className=" text-7xl text-red-400">{a.data.joke}</a>
      </main>
    </>
  );
}
