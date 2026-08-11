import React from "react";

const Navbar = ({ country, setCountry, checkInfo }) => {
  const handleSearch = () => {
    if (country.trim()) checkInfo(country.trim());
  };

  return (
    <div className="w-full bg-[#0F1620] border-b border-[#C9A227]/20 px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
      <span className="font-serif italic text-xl text-[#F3EEE4] whitespace-nowrap">
        CountryInfo
      </span>

      <div className="flex items-center gap-2 max-w-md w-full">
        <input
          type="text"
          placeholder="Search country name..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="border-none outline-none bg-[#F3EEE4] text-[#1F2A3C] px-4 h-10 rounded-full flex-1 text-sm"
        />
        <button
          onClick={handleSearch}
          className=" bg-violet-700 hover:bg-[#B5482A] transition-colors rounded-full h-10 w-10 flex items-center justify-center shrink-0"
        >
          <i className="fa-solid fa-magnifying-glass text-sm text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;