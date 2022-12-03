import Image from 'next/image';
import logo from '../../public/assets/starbucks-logo.svg';
const Header = () => {
    return (
      <div className="navbar">
        <div className="navbar-links">
          {/* <div className="navbar-links-logo"> */}
          <Image className='z-50' src={logo} alt="header-logo" width={900} height={300} />
            {/* <img src='assets/starbucks-logo.png' alt='header-logo'/> */}
          {/* </div> */}
          <div className="navbar-links-container">
            <button className='nav-btn-lp'>Sign Up</button>
          </div>
        </div>
      </div>
    );
    };
    
    export default Header;