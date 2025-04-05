import Results from "@/components/Results";
import { Suspense } from "react";
import Loading from "./loading";

const API_KEY = process.env.API_KEY;

async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const genre = params?.genre || "fetchTopRated";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/movie/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 100000 } }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.results;

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Results results={results} />
      </Suspense>
    </div>
  );
}

export default Home;
