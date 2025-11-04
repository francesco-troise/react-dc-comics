import digital from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import visa from "../assets/img/buy-dc-power-visa.svg";

export default function BannerMain() {
  return (
    <section className="BannerMain">
      <div className="container d-flex  py-5 ps-5 ">
        <div className="SubSection text-white">
          <a href="#">
            <img src={digital} alt="#" className="ImgBannerMain" />
          </a>
          <span className="SpanBannerMain">DIGITAL COMICS</span>
        </div>

        <div className="SubSection text-white">
          <a href="#">
            <img src={merchandise} alt="#" className="ImgBannerMain" />
          </a>
          <span className="SpanBannerMain">DC MERCHANDISE</span>
        </div>

        <div className="SubSection text-white">
          <a href="#">
            <img src={subscription} alt="#" className="ImgBannerMain" />
          </a>
          <span className="SpanBannerMain">SUBSCRIPTION</span>
        </div>

        <div className="SubSection text-white">
          <a href="#">
            <img
              src={locator}
              alt="#"
              className="ImgBannerMain"
              id="ImgLocator"
            />
          </a>
          <span className="SpanBannerMain">COMIC SHOP LOCATOR</span>
        </div>

        <div className="SubSection text-white">
          <a href="#">
            <img src={visa} alt="#" className="ImgBannerMain" id="ImgVisa" />
          </a>
          <span className="SpanBannerMain">DC POWER VISA</span>
        </div>
      </div>
    </section>
  );
}
