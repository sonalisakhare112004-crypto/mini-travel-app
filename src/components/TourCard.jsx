// components/TourCard.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const TourCard = ({ tour, handleDelete }) => {

const [wishlist,setWishlist]=useState(false)

  return (
    <div className="card shadow h-100 border-0">

      <button
        className="btn position-absolute top-0 end-0 m-2 border-0"
        onClick={() => setWishlist(!wishlist)}
      >
        <FaHeart
          size={24}
          color={wishlist ? "red" : "white"}
        />
      </button>

      <img
        src={tour.image}
        alt={tour.name}
        className="card-img-top"
        style={{
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>{tour.name}</h4>

          <span className="badge bg-success fs-6">
            ₹ {tour.price}
          </span>
        </div>

        <p className="text-muted">
          {tour.info.substring(0, 100)}...
        </p>

        <div className="d-flex gap-2 mt-auto">
          <Link
            to={`/tour/${tour.id}`}
            className="btn btn-primary w-50"
          >
            View Details
          </Link>

          <button
            className="btn btn-danger w-50"
            onClick={() => handleDelete(tour.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;