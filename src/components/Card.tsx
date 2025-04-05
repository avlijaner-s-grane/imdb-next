import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

function Card({ result }: { result: any }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-amber-400 sm:shadow-md rounded-lg sm:border sm:border-black sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt="Movie Poster"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-70 transition-opacity duration-300 "
        />
        <div className="p-2">
          <h2 className="text-lg font-bold truncate text-center">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <div className="flex items-center">
            <p>{result.release_date || result.first_air_date}</p>
            <span className="h-5 mr-1 ml-3">
              <FiThumbsUp />
            </span>
            <span>{result.vote_count}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
