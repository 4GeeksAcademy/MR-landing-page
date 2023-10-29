import React, { useState } from "react";

function Jumbotron() {
  return (
    <>
      <header className="bg-dark py-5 my-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className=" text-white">
            <h1 className="display-4 fw-bolder">A Warm Welcome!</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              iusto? Voluptates, libero id corporis aut quis perferendis modi
              voluptatem excepturi sed animi temporibus, tempora doloremque sint
              unde. Dolores, nemo aut?
            </p>
            <button type="button" class="btn btn-primary">
              Call to action!
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Jumbotron;
