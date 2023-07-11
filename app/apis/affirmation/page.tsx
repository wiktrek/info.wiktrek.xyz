import axios from "axios";
import Text from "~/components/text";
// import Link from "next/link";
interface Affirmation {
  affirmation: string;
}
export default async function Page() {
  "use client";
  const a = (await axios.get("https://www.affirmations.dev/"))
    .data as Affirmation;
  return <Text text={a.affirmation} />;
}
