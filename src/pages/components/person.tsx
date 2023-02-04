// import Link from "next/link";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Image from "next/image";
const Person = () => {
  return (
    <div>
      <div className="h-46 w-56 rounded-2xl bg-slate-800 text-white">
        <a>Name</a>
        <p>Last Name</p>
        <Image
          alt="info.wiktrek.xyz"
          src="/image.png"
          width="80"
          height="50"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Person;
