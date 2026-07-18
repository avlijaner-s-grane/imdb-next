import Results from "@/components/Results";

export default async function Page({
  params,
}: {
  params: Promise<{ searchTerm: string }>;
}) {
  const { searchTerm } = await params;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${encodeURIComponent(searchTerm)}&language=en-US&page=1&include_adult=false`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await response.json();
  const results = data.results;

  return (
    <div>
      {results.length === 0 ? (
        <h1 className="text-center pt-6">No results found.</h1>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
}
