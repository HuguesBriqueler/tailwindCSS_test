import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-1/3 mx-auto mt-4">
      <ul className="flex justify-between">
        <li className="default-tab bg-yellow-200 border-yellow-300">
          <Link to="/">Welcome</Link>
        </li>
        <li className="default-tab bg-red-200 border-red-300">
          <Link to="/whoami">Who Am I</Link>
        </li>
        <li className="default-tab bg-blue-200 border-blue-300">
          <Link to="/projects">My Projects</Link>
        </li>
        <li className="default-tab bg-green-200 border-green-300">
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
