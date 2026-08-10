import React, { useEffect, useState } from "react";
import { getCountryByName } from "../util/service";

const Home = () => {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({});
    const [loader, setLoading] = useState(false);

  const checkInfo = async (name) => {
    getCountryByName(name).then((res) => {
        setLoading(true);
      if (res && res.length > 0) {
        setCountryData(res[0]);
        console.log(res);
        setLoading(false)
      } else {
        alert("Country not found");
      }
    });
  };
  useEffect(() => {
    checkInfo("pakistan");
  }, []);

  return (
    <>
      <div className="bg-linear-to-r from-violet-300 to-violet-600 w-auto h-screen flex items-center justify-center">
        <div className="relative overflow-hidden backdrop-blur-md w-[90%]  max-w-117.5 text-white bg-violet-700 mx-auto rounded-2xl p-6 sm:p-10 text-center">
          {loader && (
      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-3 transition-all duration-300">
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        <p className="text-sm font-medium tracking-wide text-blue-100">Fetching Country Data...</p>
      </div>
    )}

          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              placeholder="Enter Country Name"
              id="search"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border-none outline-none bg-[#ebfffc] text-[#555] px-4 sm:px-6 h-12 sm:h-15 rounded-full flex-1 mr-3 sm:mr-4 text-base sm:text-lg"
            />
            <button
              id="btn"
              onClick={() => checkInfo(country)}
              className="border-none outline-none bg-[#ebfffc] rounded-full h-12 w-12 sm:h-15 sm:w-15 cursor-pointer flex items-center justify-center"
            >
              <i className="fa-solid fa-magnifying-glass text-lg sm:text-xl text-[#030a09]"></i>
            </button>
          </div>

          <div className="country">
            <img
              src={countryData?.flags?.png}
              alt="Country flag"
              className="w-32 sm:w-42.5 mx-auto mt-6 sm:mt-8 rounded shadow-md"
            />
            <h2 className="name text-3xl sm:text-5xl font-medium mt-4">
              {countryData?.name}
            </h2>
            <h3 className="capital text-lg sm:text-2xl font-normal mt-2 text-blue-100">
              {countryData?.capital}
            </h3>
          </div>

          <div className="flex items-center justify-between px-2 text-[8px] sm:px-5 mt-14 sm:mt-24">
            {/* Region Section */}
            <div className="">
              <p className="text-[8px] sm:text-2xl pr-3 -mt-1">{countryData?.region}</p>
              <p className="text-xs sm:text-base">Region</p>
            </div>

            {/* Currency Section */}
            <div className="">
              <p className="text-[8px] sm:text-2xl -mt-1">
                {" "}
                {countryData?.currencies?.[0]?.name}{" "}
              </p>
              <p className="text-xs sm:text-base">Currency</p>
            </div>

            {/* Language Section */}
            <div className="">
              <span className="text-[8px] inline-block sm:text-2xl -mt-1">
                {countryData?.languages?.[0]?.name}
              </span>
              <span className="text-[8px] inline-block sm:text-2xl -mt-1">
                {countryData?.languages?.[1]?.name}
              </span>
              <p className="text-xs sm:text-base">Language</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
