import React, { useState } from 'react';


const TravelPage = () => {
  const [from, setFrom] = useState("Lahore");
  const [to, setTo] = useState("Karachi");
  const [departureDate, setDepartureDate] = useState("2022-11-07");
  const [returnDate, setReturnDate] = useState("2022-11-13");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("Economy");

  const handleSearch = () => {
    console.log(`Searching flights from ${from} to ${to} ${departureDate} `);
  };

  return (
    <div className="bg-gray-100">
      <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617718105767-35ec173584e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwYW5kJTIwbGl2ZXxlbnwwfHwwfHx8MA%3D%3D")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl font-bold">Helping Others LIVE & TRAVEL</h1>
          <p className="mt-4">Special offers to suit your plan</p>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} className="border border-gray-300 rounded-md p-2" />
            <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} className="border border-gray-300 rounded-md p-2 md:mx-2" />
            <select value={classType} onChange={(e) => setClassType(e.target.value)} className="border border-gray-300 rounded-md p-2">
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} className="border border-gray-300 rounded-md p-2" />
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="border border-gray-300 rounded-md p-2 md:mx-2" />
            <input type="number" value={passengers} onChange={(e) => setPassengers(e.target.value)} className="border border-gray-300 rounded-md p-2" />
          </div>

          <button onClick={handleSearch} className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600">
            Show Flights
          </button>
        </div>

        <h2 className="mt-6 text-2xl font-bold text-center">Plan your perfect trip</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {['Istanbul, Turkey', 'Sydney, Australia', 'Baku, Azerbaijan', 'Maldives', 'Paris, France', 'New York, US', 'London, UK', 'Tokyo, Japan', 'Dubai, UAE'].map((location) => (
            <div key={location} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={"https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHVya2tleSUyMHBsYWNlfGVufDB8fDB8fHww"} alt={location} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{location}</h3>
                <div className="mt-2">
                  <button className="text-blue-500">Flights</button>
                  <button className="text-blue-500 mx-2">Hotels</button>
                  <button className="text-blue-500">Resorts</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPage;