import Image from "next/image";
import logo from "../../public/imgs/logo.svg";

import "./Navbar.scss";

const LandingPage = () => {
  return (
      <div className="navbar">
        <Image
          src={logo}
          alt="Picture of the author"
          width={200}
          height={300}
        />
        <button className="btn">Sign in</button>
      </div>
  );
};
export default LandingPage;
