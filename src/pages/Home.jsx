// pages/Home.jsx

import React, { useState } from "react";
import data from "../data";
import TourCard from "../components/TourCard";

const Home = () => {

  const [tours, setTours] = useState(data);
  const [wishlist, setWishlist] = useState([]);

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const updatedTours = tours.filter(
      (tour) => tour.id !== id
    );

    setTours(updatedTours);
  };

  const refreshTours = () => {
    setTours(data);
  };

  const handleWishlist = (tour) => {

  const alreadyExist = wishlist.find(
    (item) => item.id === tour.id
  );

  if (alreadyExist) {

    const updatedWishlist = wishlist.filter(
      (item) => item.id !== tour.id
    );

    setWishlist(updatedWishlist);

  } else {

    setWishlist([...wishlist, tour]);

  }
};

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold mb-5">
        🌍 Mini Travel App
      </h1>

       {tours.length === 0 ? (
        <div className="text-center">
          <h2 className="mb-4">
            No Tours Left
          </h2>

          <button
            className="btn btn-success"
            onClick={refreshTours}
          >
            Refresh
          </button>
        </div>
      ) : (

      <div className="row">
        {tours.map((tour) => (
          <div
            className="col-md-4 mb-4"
            key={tour.id}
          >
            <TourCard
              tour={tour}
              handleDelete={handleDelete}
              handleWishlist={handleWishlist}
  wishlist={wishlist}
            />
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Home;