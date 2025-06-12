import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const DynamicSearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };
  return (
    <div className="relative">
      {/* Search Icon */}
      {!isSearchOpen && (
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faMagnifyingGlass}
          onClick={toggleSearch}
          size="lg"
        />
      )}

      {/* Input Field with Search and Close Icons */}
      {isSearchOpen && (
        <div className="relative">
          <input
            className="w-52 border-b-2 border-[#91A0A8] py-1 pr-10 pl-10 transition-all duration-300 focus:outline-none md:w-80"
            placeholder="Search..."
            type="text"
          />
          {/* Search Icon inside Input */}
          <FontAwesomeIcon
            className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-600"
            icon={faMagnifyingGlass}
          />
          {/* Close Icon inside Input */}
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 transform"
            onClick={closeSearch}
            type="button"
          >
            <FontAwesomeIcon className="text-gray-600" icon={faTimes} />
          </button>
        </div>
      )}
    </div>
  );
};
