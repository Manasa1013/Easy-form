import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";

import { useForm } from "../../Contexts/FormContext";
import "./Navbar.css";
export function Navbar() {
  const { openElements, setOpenElements } = useForm();
  function handleToggleElements() {
    setOpenElements((prev) => !prev);
  }
  return (
    <nav className="nav sticky  top-0 bg-white text-teal-700 z-30 shadow flex gap-6 items-center py-6 px-4 m-0 text-lg md:font-medium font-semibold">
      {openElements ? (
        <span className="md:hidden" onClick={handleToggleElements}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      ) : (
        <span className="md:hidden" onClick={handleToggleElements}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      )}

      <header className="inline">
        <NavLink to="/" className="logo text-teal-700">
          Easy form
        </NavLink>
      </header>
      <ul className="flex md:flex-row justify-between items-center gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/build">Build</NavLink>
        <NavLink to="/">Show</NavLink>
      </ul>
    </nav>
  );
}
