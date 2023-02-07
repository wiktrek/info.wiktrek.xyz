// import Link from "next/link";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Image from "next/image";
interface Tweet {
  user: User;
  createdAt: string;
  tweet: string;
}
interface User {
  name: string;
  image: string;
}
interface props {
  tweet: Tweet;
}
const Tweet = (props: props) => {
  return (
    <div className=" max-w-96 flex w-96 items-center justify-center rounded-2xl border-4 border-slate-900 bg-slate-800 text-center text-2xl text-white">
      <div className="">
        <Image alt="next" src={props.tweet.user.image} width="40" height="40" />
        <a>{props.tweet.user.name}</a>
      </div>
      <p className=" ">{props.tweet.tweet}</p>
      <a className="text-sm text-white">{props.tweet.createdAt}</a>
    </div>
  );
};

export default Tweet;
