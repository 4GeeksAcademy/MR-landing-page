import React, { useState } from "react";

function Jumbotron() {
  return (
    <>
      <header className="bg-light py-5 my-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className=" text-black">
            <h1 className="display-4 fw-bolder">A Warm Welcome!</h1>
            <p className="lead fw-normal text-black-50 mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              iusto? Voluptates, libero id corporis aut quis perferendis modi
              voluptatem excepturi sed animi temporibus, tempora doloremque sint
              unde. Dolores, nemo aut?
            </p>
            <button type="button" className="btn btn-primary mt-5">
              Call to action!
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Jumbotron;
