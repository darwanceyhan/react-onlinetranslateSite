import Image from "next/image";
import tranlsateSVG from "../public/translate.svg";
import rocketSVG from "../public/rocket.svg";
import piggySVG from "../public/piggy.svg";

export default function Home() {
  return (
    <div className="container mt-52 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div>
          <Image
            src={tranlsateSVG}
            alt="translate"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
        <div>
          <Image
            src={rocketSVG}
            alt="rocket"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
        <div>
          <Image
            src={piggySVG}
            alt="piggy"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
