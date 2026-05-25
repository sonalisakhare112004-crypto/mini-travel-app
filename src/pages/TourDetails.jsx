// pages/TourDetails.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data";

const TourDetails = () => {
  const { id } = useParams();

  const tour = data.find((item) => item.id === Number(id));

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-dark mb-4">
        ← Back To Home
      </Link>

      <div className="card shadow border-0">
        <img
          src={tour.image}
          alt={tour.name}
          className="card-img-top"
          style={{
            height: "500px",
            objectFit: "cover",
          }}
        />

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1>{tour.name}</h1>

            <span className="badge bg-success fs-5">
              ₹ {tour.price}
            </span>
          </div>

          <p className="fs-5 text-muted">
            {tour.info}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;