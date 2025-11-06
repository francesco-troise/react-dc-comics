import logo from "../assets/img/dc-logo.png";
import HeaderLink from "./HeaderLink";
//Importing the logo image

export default function Header({ array_link_header }) {
  return (
    <header className="bg-white">
      <nav className="navbar py-2">
        <div className="container">
          <a className="navbar-brand " href="#">
            <img src={logo} alt="logo" className="logo-navbar" />
            {/*The SRC of img is contained in the Logo*/}
          </a>
          <div className="navbar-nav flex-row gap-4 fw-semibold">
            {array_link_header.map((link) => {
              return (
                <HeaderLink
                  key={link.id}
                  href={link.href}
                  link_name={link.link_name}
                />
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
