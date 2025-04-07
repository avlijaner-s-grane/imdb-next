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
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-14 rounded-md placeholder:gray-500 outline-none bg-transparent flex-1"
        value={searchParams}
        onChange={handleInputChange}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={!searchParams}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
