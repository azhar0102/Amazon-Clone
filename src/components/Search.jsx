import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  const dropMenu = [
    "All",
    "Deals",
    "Amazon",
    "Fashion",
    "Computers",
    "Home",
    "Mobiles",
  ];
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-9 bg-amazonclone-yellow rounded">
        <select className="bg-gray-300 p-2 rounded-l text-xs border lg:text-sm h-[100%] outline-none text-black">
          {dropMenu.map((item, id) => (
            <option key={id}>{item}</option>
          ))}
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l outline-none text-black"
          type="text"
        />
        <button className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
    </div>
  );
};

export default Search;
