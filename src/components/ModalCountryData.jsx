import React from "react";
import MapComponent from "./map";

export default function ModalCountryData({ country }) {
  if (!country) return null;


  const coordinates = country?.latlng;

  return (
    <div className="p-5 text-white bg-violet-500">
      <div className="flex flex-col items-center text-center">
        <img
          src={country?.flags?.png}
          alt="Country flag"
          className="w-24 h-16 object-cover rounded shadow-md border border-white/20"
        />
        <h4 className="mt-3 text-lg font-semibold">{country?.name}</h4>
        <p className="text-xs uppercase tracking-wide text-violet-200">
          {country?.region}
        </p>
      </div>

      {/* Map Section: Using a standard Tailwind height like h-48 or h-64 */}
      <div id="map" className="h-48 w-full mt-4 overflow-hidden rounded-lg shadow-inner bg-violet-600">
        {coordinates ? (
          <MapComponent center={coordinates} />
        ) : (
          <div className="flex items-center justify-center h-full text-xs text-violet-200">
            No map data available
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
        <div className="bg-violet-800/40 rounded-lg p-2 text-center">
          <p className="text-[10px] text-violet-200">Population</p>
          <p className="font-medium">{country?.population?.toLocaleString()}</p>
        </div>

        <div className="bg-violet-800/40 rounded-lg p-2 text-center">
          <p className="text-[10px] text-violet-200">Capital</p>
          <p className="font-medium">{country?.capital}</p>
        </div>

        <div className="bg-violet-800/40 rounded-lg p-2 text-center">
          <p className="text-[10px] text-violet-200">Latitude</p>
          <p className="font-medium">{coordinates?.[0]}</p>
        </div>

        <div className="bg-violet-800/40 rounded-lg p-2 text-center">
          <p className="text-[10px] text-violet-200">Longitude</p>
          <p className="font-medium">{coordinates?.[1]}</p>
        </div>
      </div>
    </div>
  );
}
