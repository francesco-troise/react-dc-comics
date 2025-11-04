import digital from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import visa from "../assets/img/buy-dc-power-visa.svg";

export default function BannerMain() {
  return (
    <section className="BannerMain">
      <div className="container d-flex align-items-center py-5 text-center">
        <div className="SubSection text-white">
          <img src={digital} alt="#" className="ImgBannerMain" />
          <span className="SpanBannerMain">DIGITAL COMICS</span>
        </div>

        <div className="SubSection text-white">
          <img src={merchandise} alt="#" className="ImgBannerMain" />
          <span className="SpanBannerMain">DC MERCHANDISE</span>
        </div>

        <div className="SubSection text-white">
          <img src={subscription} alt="#" className="ImgBannerMain" />
          <span className="SpanBannerMain">SUBSCRIPTION</span>
        </div>

        <div className="SubSection text-white">
          <img
            src={locator}
            alt="#"
            className="ImgBannerMain"
            id="ImgLocator"
          />
          <span className="SpanBannerMain">COMIC SHOP LOCATOR</span>
        </div>

        <div className="SubSection text-white">
          <img src={visa} alt="#" className="ImgBannerMain" id="ImgVisa" />
          <span className="SpanBannerMain">DC POWER VISA</span>
        </div>
      </div>
    </section>
  );
}
