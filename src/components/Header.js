import "./css/Header.css";

const Header = () => {

  /*
    This Header has three components
    1. Link To Main
    2. Welcome Text
  */
  return (
 
    <nav className="navbar sticky-top navbar-dark" id="dboard">

      <div className="container-fluid">

        <a href="https://github.com/myasirbabar" className="navbar-brand"><b>Contact Book</b></a>

        <h4 style={{ color: 'white' }}>Welcome</h4>
      </div>
    </nav>
  );
}

export default Header;
