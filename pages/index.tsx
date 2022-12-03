import Image from "next/image";
import card1 from "../public/imgs/card1.png";
import card2 from "../public/imgs/card2.png";

import "./index.scss";
import Navbar from "../components/brandComponents/Navbar";

export default function Home() {
  return (
    <div className="landing">
      <Navbar />
      <div className="mainContainer">
        <p>
          Supercharge your customer engagement with No-code NFT loyalty program.
        </p>
        <div className="cards">
          <Image
            src={card1}
            alt="Picture of the author"
            width={200}
            height={300}
          />
          <Image
            src={card2}
            alt="Picture of the author"
            width={200}
            height={300}
          />
        </div>
        <button className="btn2">Get Started</button>
      </div>
    </div>
  );
}
