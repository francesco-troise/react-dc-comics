export default function Card(props) {
  return (
    <div className="col-6 col-md-4 col-lg-2 mb-4">
      <div className="card h-100">
        <img
          src={props.thumb}
          className="card-img-top"
          id="comic-img"
          alt={props.series}
        />
        <div className="card-body">
          <h6 className="card-title">{props.series}</h6>
        </div>
      </div>
    </div>
  );
}
