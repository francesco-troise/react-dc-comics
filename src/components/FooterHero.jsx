import BigLogo from "../assets/img/dc-logo-bg.png";

export default function FooterHero() {
  return (
    <section className="HeroFooter ">
      <div className="container d-flex ">
        <div className="row my-4">
          <div className="col-4">
            <h4 className="text-white">DC Comics</h4>
            <ul className="list-group list-unstyled">
              <li>
                <a href="#">Characters</a>
              </li>
              <li>
                <a href="#">Comics</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">Games</a>
              </li>
              <li>
                <a href="#">Video</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h4 className="text-white">DC</h4>
            <ul className="list-group list-unstyled">
              <li>
                <a href="#">Term of us</a>
              </li>
              <li>
                <a href="#">Privacy policy-New-</a>
              </li>
              <li>
                <a href="#">Add Choices</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Job</a>
              </li>
              <li>
                <a href="#">Subscription</a>
              </li>
              <li>
                <a href="#">Talent Workshops</a>
              </li>
              <li>
                <a href="#">CPSC Certificates</a>
              </li>
              <li>
                <a href="#">Ratings</a>
              </li>
              <li>
                <a href="#">Shop Help</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h4 className="text-white">Sites</h4>
            <ul className="list-group list-unstyled">
              <li>
                <a href="#">DC</a>
              </li>
              <li>
                <a href="#">MAD Magazine</a>
              </li>
              <li>
                <a href="#">DC Kids</a>
              </li>
              <li>
                <a href="#">DC Universe</a>
              </li>
              <li>
                <a href="#">DC Power Visa</a>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h4 className="text-white">SHOP</h4>
            <ul className="list-group list-unstyled">
              <li>
                <a href="#">Shop DC</a>
              </li>
              <li>
                <a href="#">Shop DC Collectibles</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logo">
          <img src={BigLogo} />
        </div>
      </div>
    </section>
  );
}
