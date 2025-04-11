import Image from "next/image";

const API_KEY = process.env.API_KEY;

async function page({ params }: { params: Promise<{ movieId: string }> }) {
  const { movieId } = await params;
  console.log(movieId);
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

  const movie = await res.json();
  console.log(movie);

  const srcPath = `https://image.tmdb.org/t/p/original/${
    movie.backdrop_path || movie.poster_path
  }`;
  console.log(srcPath);

  return (
    <div className="w-full">
      <div className="mt-5 gap-4 p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-7xl mx-auto md:space-x-6">
        <Image
          src={srcPath}
          alt="Movie Poster"
          width={700}
          height={400}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        />
        <div className="p-2  rounded-lg shadow shadow-stone-800 ">
          <h2 className="text-2xl mb-5 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-xl mb-4">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Release date: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating: </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
