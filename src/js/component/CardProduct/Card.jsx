import React from "react";

function Card() {
  return (
    <div className="col-3 mb-5">
      <div className="card h-100">
        {/* Product image*/}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* Product details*/}
        <div className="card-body p-4">
          <div className="text-center">
            {/* Product name*/}
            <h5 className="fw-bolder">Fancy Product</h5>
            {/* Product price*/}
            $40.00 - $80.00
          </div>
        </div>
        {/* Product actions*/}
        <div className="text-center border py-3 bg-light">
          <button type="button" className="btn btn-primary ">
            Call to action!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
