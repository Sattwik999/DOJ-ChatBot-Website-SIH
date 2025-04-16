import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          My Website
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-gray-300 hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="/njdg" className="text-gray-300 hover:text-black">
              NJDG
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
