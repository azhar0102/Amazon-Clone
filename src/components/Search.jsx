import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { callAPI } from "../utils/CallApi";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });
    setSearchTerm("");
    setCategory("All");
  };

  const getFunctions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };
  useEffect(() => {
    getFunctions();
  }, []);
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
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-300 p-2 rounded-l text-xs border lg:text-sm h-[100%] outline-none text-black"
        >
          {dropMenu.map((item, id) => (
            <option key={id}>{item}</option>
          ))}
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l outline-none text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="w-[45px]" onClick={onHandleSubmit}>
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="absolute bg-white text-black w-full z-40">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLocaleLowerCase();
              const title = suggestion.title.toLocaleLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
