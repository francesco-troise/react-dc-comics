import logo from "../assets/img/dc-logo.png";

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="navbar py-2">
        <div className="container">
          <a className="navbar-brand " href="#">
            <img src={logo} alt="logo" className="logo-navbar" />
          </a>

          <div className="navbar-nav flex-row gap-4 fw-semibold">
            <a className="nav-link " href="#">
              Characters
            </a>
            <a className="nav-link" href="#">
              Comics
            </a>
            <a className="nav-link" href="#">
              Movies
            </a>
            <a className="nav-link " href="#">
              Tv
            </a>
            <a className="nav-link " href="#">
              Games
            </a>
            <a className="nav-link" href="#">
              Collectibles
            </a>
            <a className="nav-link" href="#">
              Video
            </a>
            <a className="nav-link " href="#">
              Fans
            </a>
            <a className="nav-link" href="#">
              News
            </a>
            <a className="nav-link " href="#">
              Shop
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
