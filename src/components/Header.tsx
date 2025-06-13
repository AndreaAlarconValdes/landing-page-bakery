import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

interface HeaderProps {
  hasBackground?: boolean;        
  title: React.ReactNode;        
  paragraph: string;
  linkText?: string;             
  linkTo?: string;               
}

const Header: React.FC<HeaderProps> = ({
  hasBackground = false,
  title,
  paragraph,
  linkText,
  linkTo,
}) => {
  return (
    <header className={hasBackground ? "header-img" : "header"}>
      <h1 className="header-title">{title}</h1>
      <p className="header-paragraph">{paragraph}</p>
      {hasBackground && linkText && linkTo && (
        <Link to={linkTo} className="header-link">
          {linkText}
        </Link>
      )}
    </header>
  );
};

export default Header;
