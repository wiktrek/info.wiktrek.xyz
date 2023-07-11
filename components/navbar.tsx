import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export default function Navbar() {
  return (
    <>
      <main className=" items-center justify-center text-right text-6xl no-underline">
        <Link href="/" className=" pr-4">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </main>
    </>
  );
}
