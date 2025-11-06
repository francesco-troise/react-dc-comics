import youtube from "../assets/img/footer-youtube.png";
import twitter from "../assets/img/footer-twitter.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";
import facebook from "../assets/img/footer-facebook.png";
//Import of the various images required by the component

export default function FooterSocial() {
  return (
    <section className="SocialFooter">
      <div className="container py-4 d-flex justify-content-between">
        <div className="left-footer">
          <a href="#" className="btn">
            SIGN-UP NOW!
          </a>
        </div>
        <div className="right-footer d-flex gap-3 align-items-center">
          <a href="#">FOLLOW US</a>
          <a href="#">
            <img src={facebook} alt="#" />
          </a>
          <a href="#">
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={youtube} />
          </a>
          <a href="#">
            <img src={pinterest} />
          </a>
          <a href="#">
            <img src={periscope} />
          </a>
        </div>
      </div>
    </section>
    //The various image SRCs are linked to their respective imports
  );
}
