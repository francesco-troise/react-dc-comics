import Card from "./Card";

export default function Main({ comics }) {
  //destructuring props: extract only comics(array)
  return (
    <main className="bg-dark py-4">
      <div className="container text-center">
        <div className="row" id="row-comics">
          {comics.map((comic) => (
            //Comics array map: every single object is made available to "Card.jsx"

            <Card key={comic.id} thumb={comic.thumb} series={comic.series} />
            // For each comic object, create a <Card /> and pass it specific props (thumb, series)
          ))}
        </div>
        <button className="btn px-5" id="btn">
          Load more
        </button>
        <span className="badge " id="badge">
          CURRENT SERIES
        </span>
      </div>
    </main>
  );
}
