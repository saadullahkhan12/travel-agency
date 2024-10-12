import React from "react";

const HotelListingPage = () => {


  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://66eaac9955ad32cda479f0d5.mockapi.io/rooms/name');
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setHotelData(data);
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, []);

  if (loading) {
      return (
          <div className="flex justify-center items-center h-screen">
              <h1 className="text-xl font-semibold">Loading...</h1>
          </div>
      );
  }

  if (error) {
      return (
          <div className="flex justify-center items-center h-screen">
              <h1 className="text-red-600">{`Error: ${error.message}`}</h1>
          </div>
      );
  }




  return (
    <>




    <div className="flex max-w-7xl mx-auto mt-8">
      {/* Filters Section */}
      <div className="w-1/4 pr-8">
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-medium">Price</h3>
            <input type="range" min="50" max="500" className="w-full mt-2" />
            <div className="flex justify-between text-gray-600 mt-1">
              <span>$50</span>
              <span>$500</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <h3 className="font-medium">Rating</h3>
            <div className="flex mt-2 space-x-2">
              {[1, 2, 3, 4].map((rating) => (
                <button
                  key={rating}
                  className="border rounded-full px-3 py-1 text-sm"
                >
                  {rating}+
                </button>
              ))}
            </div>
          </div>

          {/* Freebies */}
          <div className="mb-6">
            <h3 className="font-medium">Freebies</h3>
            <div className="mt-2 space-y-2 text-sm">
              {["Free breakfast", "Free parking", "Free internet", "Free airport shuttle", "Free cancellation"].map(
                (freebie) => (
                  <div key={freebie} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>{freebie}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-medium">Amenities</h3>
            <div className="mt-2 space-y-2 text-sm">
              {["24hr front desk", "Air-conditioned", "Fitness", "Pool", "More amenities..."].map(
                (amenity) => (
                  <div key={amenity} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>{amenity}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Listings Section */}
      <div className="w-3/4">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Showing 4 of 257 places</h2>
          </div>
          <div>
            <select className="border p-2 rounded-lg">
              <option>Sort by Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Hotel 1 */}
        <div className="border p-4 mb-6 rounded-lg shadow-sm flex space-x-4">
          <img
            src="https://yourimageurl.com/hotel1.jpg"
            alt="CVK Park Bosphorus Hotel"
            className="w-1/4 rounded-lg"
          />
          <div className="w-3/4">
            <h3 className="text-xl font-semibold">
              CVK Park Bosphorus Hotel Istanbul
            </h3>
            <p className="text-gray-500">
              Gümüssuyu Mah. İnönü Cad. No:8, Istanbul 34437
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-500">5 Star Hotel</span>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <span className="text-gray-500">Very Good 371 reviews</span>
              <span className="text-[#8dd3bb] font-semibold">See Amenities</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-red-500 text-xl font-bold">$240/night</span>
              <button className="px-6 py-2 bg-[#8dd3bb] text-white rounded-lg">
                View Place
              </button>
            </div>
          </div>
        </div>

        {/* Hotel 2 */}
        <div className="border p-4 mb-6 rounded-lg shadow-sm flex space-x-4">
          <img
            src="https://yourimageurl.com/hotel2.jpg"
            alt="Eresin Hotels"
            className="w-1/4 rounded-lg"
          />
          <div className="w-3/4">
            <h3 className="text-xl font-semibold">
              Eresin Hotels Sultanahmet - Boutique Class
            </h3>
            <p className="text-gray-500">Kucukayasofya No:5, Istanbul 34437</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500">⭐⭐⭐⭐</span>
              <span className="text-gray-500">4 Star Hotel</span>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <span className="text-gray-500">Very Good 324 reviews</span>
              <span className="text-[#8dd3bb] font-semibold">See Amenities</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-red-500 text-xl font-bold">${hotelData.price}/night</span>
              <button className="px-6 py-2 bg-[#8dd3bb] text-white rounded-lg">
                View Place
              </button>
            </div>
          </div>
        </div>

        {/* More hotels can be added here similarly */}
      </div>
    </div>
    </>
  );
};

export default HotelListingPage;
