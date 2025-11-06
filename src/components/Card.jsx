export default function Card(props) {
  //"Props" contains the various individual "props" created and passed to "Card.jsx" from "Main.jsx"
  return (
    <div className="col-6 col-md-4 col-lg-2 mb-4">
      <div className="card h-100">
        <img
          src={props.thumb}
          className="card-img-top"
          alt={props.series}
          id="comic-img"
        />
        {/*Extracting individual "props" from "Props"*/}

        <div className="card-body">
          <h6 className="card-title">{props.series}</h6>
        </div>
      </div>
    </div>
  );
}
