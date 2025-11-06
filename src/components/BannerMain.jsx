import digital from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import visa from "../assets/img/buy-dc-power-visa.svg";
//Import of the various images required by the component

export default function BannerMain() {
  return (
    <section className="BannerMain">
      <div className="container d-flex  py-5 ps-5 ">
        <div className="SubSection text-white">
          <a href="#">
            <img src={digital} alt="#" className="ImgBannerMain" />
            {/*The SRC of img is contained in "digital"*/}
          </a>
          <span className="SpanBannerMain">DIGITAL COMICS</span>
        </div>

        <div className="SubSection text-white">
          <a href="#">
            <img src={merchandise} alt="#" className="ImgBannerMain" />
            {/*The SRC of img is contained in "merchandise*/}
          </a>
          <span className="SpanBannerMain">DC MERCHANDISE</span>
        </div>

        <div className="SubSection text-white">
          <a href="#">
            <img src={subscription} alt="#" className="ImgBannerMain" />
            {/*The SRC of img is contained in "subscription"*/}
          </a>
          <span className="SpanBannerMain">SUBSCRIPTION</span>
        </div>

        <div className="SubSection text-white">
          <a href="#">
            <img src={locator} className="ImgBannerMain" id="ImgLocator" />
            {/*The SRC of img is contained in "locator"*/}
          </a>
          <span className="SpanBannerMain">COMIC SHOP LOCATOR</span>
        </div>

        <div className="SubSection text-white">
          <a href="#">
            <img src={visa} alt="#" className="ImgBannerMain" id="ImgVisa" />
            {/*The SRC of img is contained in "visa"*/}
          </a>
          <span className="SpanBannerMain">DC POWER VISA</span>
        </div>
      </div>
    </section>
  );
}
