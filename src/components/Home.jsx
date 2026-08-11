import React, { useEffect, useState } from "react";
import { getCountryByName, getRandomCountry } from "../util/service";
import Navbar from "./Navbar";

const Home = () => {
  const [country, setCountry] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [loader, setLoading] = useState(false);

  const checkInfo = async (name) => {
    setLoading(true);
    getCountryByName(name).then((res) => {
      if (res && res.length > 0) {
        setCountryList(res);
        console.log(res);
      } else {
        alert("City not found. Please check spellings");
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    const loadRandomCountries = async () => {
      setLoading(true);

      const results = await Promise.all([
        getRandomCountry(),
        getRandomCountry(),
        getRandomCountry(),
        getRandomCountry(),
        getRandomCountry(),
        getRandomCountry(),
      ]);
      setCountryList(results);

      setLoading(false);
    };
    loadRandomCountries();
  }, []);

  return (
    <>
      <Navbar country={country} setCountry={setCountry} checkInfo={checkInfo} />
      <div className="bg-linear-to-r from-violet-300 to-violet-600 w-auto min-h-screen py-8 px-4">
        {loader && (
          <div className="fixed inset-0 bg-blue-900/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-3 transition-all duration-300">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            <p className="text-sm font-medium tracking-wide text-blue-100">
              Fetching Country Data...
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {countryList.map((countryData) => (
            <div className="relative overflow-hidden backdrop-blur-md text-white bg-violet-700 rounded-xl p-3 sm:p-4 text-center">
              <div className="country">
                <img
                  src={countryData?.flags?.png}
                  alt="Country flag"
                  className="w-16 sm:w-20 mx-auto mt-2 rounded shadow-md"
                />
                <h2 className="name text-sm sm:text-base font-medium mt-2 truncate">
                  {countryData?.name}
                </h2>
                <h3 className="capital text-xs sm:text-sm font-normal text-blue-100 truncate">
                  {countryData?.capital}
                </h3>
              </div>

              <div className="flex items-center justify-between px-1 text-[7px] sm:text-[9px] mt-4">
                <div className="">
                  <p className="sm:text-xs">{countryData?.region}</p>
                  <p className="text-[6px] sm:text-[8px]">Region</p>
                </div>

                <div className="">
                  <span className="text-[7px] inline-block sm:text-xs -mt-1">
                    {countryData?.currencies?.[0]?.name}
                  </span>
                  <span className="text-[7px] inline-block sm:text-xs -mt-1">
                    {countryData?.currencies?.[1]?.name}
                  </span>
                  <p className="text-[6px] sm:text-[8px]">Currency</p>
                </div>

                <div className="">
                  <span className="text-[7px] inline-block sm:text-xs -mt-1">
                    {countryData?.languages?.[0]?.name}
                  </span>
                  <span className="text-[7px] inline-block sm:text-xs -mt-1">
                    {countryData?.languages?.[1]?.name}
                  </span>
                  <p className="text-[6px] sm:text-[8px]">Language</p>
                </div>
              </div>
              <button className="text-[6px] sm:text-[8px] border border-amber-50 rounded-3xl px-3 hover:bg-[#B5482A]" >View Details</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
