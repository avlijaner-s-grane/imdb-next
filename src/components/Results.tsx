import Card from "./Card";

type Result = {
  id: string | number;
  [key: string]: unknown;
};

function Results({ results }: { results: Result[] }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4  ">
      {results.map((result: Result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
