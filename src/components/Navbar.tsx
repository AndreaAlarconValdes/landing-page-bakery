import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src="./logo.svg" alt="Artisan Bakery logo" width={25} />
          Artisan Bakery
        </Link>
      </div>
      <button
        className={`navbar-toggle ${menuOpen ? "open" : ""}`}
        onClick={handleToggle}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`navbar-routes ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/menu" onClick={closeMenu}>
          Menu
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
