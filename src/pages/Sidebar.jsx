import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 h-screen p-5 flex flex-col justify-between text-white">
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold">CAR RENT</h1>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <span className="bg-blue-500 p-2 rounded-md">:house:</span>
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>:car:</span>
            <span>Drivers</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>:blue_book:</span>
            <span>Bookings</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>:bell:</span>
            <span>Notifications</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>:gear:</span>
            <span>Settings</span>
          </li>
        </ul>
      </div>

      <div>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <span>:credit_card:</span>
            <span>Payment Details</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>:briefcase:</span>
            <span>Transactions</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>:page_facing_up:</span>
            <span>Car Report</span>
          </li>
        </ul>
        <button className="bg-gray-800 p-2 rounded-md mt-8 flex items-center space-x-2">
          <span>:unlock:</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;