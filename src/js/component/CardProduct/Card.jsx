import React from "react";

function Card() {
  return (
    <div className="card col-md-3 mb-4">
      {/* <!-- Sale badge--> */}
      <div
        className="badge bg-dark text-white position-absolute"
        style={{ top: "0.5em", right: "0.5em" }}
      >
        Sale
      </div>
      {/* <!-- Product image--> */}
      <img
        className="card-img-top"
        src="https://dummyimage.com/210x240/dee2e6/6c757d.jpg"
        alt="..."
      />
      {/* <!-- Product details--> */}
      <div className="card-body p-4">
        <div className="text-center">
          {/* <!-- Product name--> */}
          <h5 className="fw-bolder">Special Item</h5>
          {/* <!-- Product reviews--> */}
          <div className="d-flex justify-content-center small text-warning mb-2">
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
          </div>
          {/* <!-- Product price--> */}
          <span className="text-muted text-decoration-line-through">
            $20.00
          </span>
          $18.00
        </div>
      </div>
      {/* <!-- Product actions--> */}
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <button type="button" class="btn btn-primary">
            find out more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
