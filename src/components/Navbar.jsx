import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-1/3 mx-auto mt-4">
      <ul className="flex justify-between">
        <li className="w-1/4 p-2 bg-gray-300">
          <Link to="/">Welcome</Link>
        </li>
        <li className="w-1/4 p-2 bg-red-300">
          <Link to="/whoami">Who Am I</Link>
        </li>
        <li className="w-1/4 p-2 bg-blue-300">
          <Link to="/projects">My Projects</Link>
        </li>
        <li className="w-1/4 p-2 bg-green-300">
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
