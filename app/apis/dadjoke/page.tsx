import axios, { type AxiosResponse } from "axios";
import Text from "~/components/text";
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
  return <Text text={a.data.joke} />;
}
