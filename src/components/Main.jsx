import Card from "./Card";

export default function Main({ comics }) {
  return (
    <main className="bg-dark py-4">
      <div className="container text-center">
        <div className="row" id="row-comics">
          {comics.map((comic) => (
            <Card key={comic.id} thumb={comic.thumb} series={comic.series} />
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
