"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBox() {
  const [searchParams, setSearchParams] = useState();

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(e.target.value);
  };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search/${searchParams}`);
  }

  return (
    <form
      className="flex justify-between  max-w-2xl mx-auto mt-5 bg-stone-900 rounded hover:scale-105 transition-all duration-200  "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search..."
        className="px-5 w-full h-14 rounded-md placeholder:gray-500 outline-none bg-transparent flex-1 focus:bg-stone-800    "
        value={searchParams}
        onChange={handleInputChange}
      />
      <button
        className="text-amber-600 font-bold disabled:text-gray-400 px-5"
        disabled={!searchParams}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
