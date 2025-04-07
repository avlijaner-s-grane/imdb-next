import Results from "@/components/Results";

async function page({ params }: { params: { searchTerm: string } }) {
  const { searchTerm } = params;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await response.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 ? (
        <h1 className="text-center pt-6">No results found.</h1>
      ) : null}

      {results && <Results results={results} />}
    </div>
  );
}

export default page;
