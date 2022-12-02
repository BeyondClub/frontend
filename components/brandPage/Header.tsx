const Header = () => {
return (
  <div className="navbar">
    <div className="navbar-links">
      <div className="navbar-links-logo">
        <img src='assets/logo.png' alt='header-logo'/>
      </div>
      <div className="navbar-links-container">
        <button className='nav-btn'>Sign Up</button>
      </div>
    </div>
  </div>
);
};

export default Header;