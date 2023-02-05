// import Link from "next/link";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Image from "next/image";
interface props {
  name: string;
  description: string;
  url: string;
  img: string;
}
const Tool = (props: props) => {
  return (
    <div className="h-64 w-72  rounded-2xl bg-slate-50 text-center ">
      <a className="text-3xl">{props.name}</a>
      <p className="text-xl">{props.description}</p>
      <a className="text-xl" target="_blank" rel="noreferrer" href={props.url}>
        Link
      </a>
      <Image
        alt="rust"
        src={props.img}
        width="100"
        height="50"
        className="mx-auto"
      />
    </div>
  );
};

export default Tool;
