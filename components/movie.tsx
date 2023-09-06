import Head from "next/head";
export interface Props {
  name: string;
  description: string;
  episodes: number;
  ratings: number;
  averageRating: number;
}
export default function Text(props: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen items-center justify-center text-center">
        <p className=" text-4xl text-red-400">{props.name}</p>
        <p className=" text-4xl text-red-400">{props.description}</p>
        <p className=" text-4xl text-red-400">{props.episodes}</p>
        <p className=" text-4xl text-red-400">{props.ratings}</p>
        <p className=" text-4xl text-red-400">{props.averageRating}</p>
      </main>
    </>
  );
}
