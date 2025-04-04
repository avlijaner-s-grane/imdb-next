import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="mt-10 shadow-lg shadow-gray-800 flex bg-amber-600 text-white p-4 lg:text-lg justify-center gap-6 w-[70%] mx-auto rounded-full ">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
