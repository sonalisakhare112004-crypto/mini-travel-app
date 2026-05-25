import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          {/* LOGO */}
          <Link
            className="navbar-brand fw-bold fs-3"
            to="/"
          >
            🌍 TravelApp
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >

            {/* RIGHT SIDE */}
            <ul className="navbar-nav ms-auto d-flex flex-row align-items-center gap-4">

              {/* HOME */}
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-black fw-semibold"
                >
                  Home
                </Link>
              </li>

              {/* WISHLIST */}
              <li className="nav-item">
                <Link
                  to="/wishlist"
                  className="nav-link text-danger"
                >
                  <FaHeart size={22} />
                </Link>
              </li>

              {/* SEARCH */}
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                  />

                  <button
                    className="btn btn-outline-success"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar