// import Link from "next/link";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Image from "next/image";
const Item = () => {
  return (
    <div>
      <div className="h-56 w-64 rounded-2xl bg-slate-800 text-white">
        <p>Item name</p>
        <p>Price</p>
        <Image
          alt="info.wiktrek.xyz"
          src="/shop.png"
          width="80"
          height="50"
          className="mx-auto pb-8"
        />
        <button className="h-12 w-32 rounded bg-slate-600 font-bold">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Item;
