import React from "react";
import Header from "../components/Header";

function Shop() {
  return (
    <div>
      <Header />
      <h1 className="text"> SALES : EXTRA 20% OFF </h1>
      <br/>
      <h1>(ALREADY UP TO 80% OFF)</h1>
      <div class="container mt-10">
        <div class="item">
          <img
                src="/img/l7.jpg"
                alt="unsplash"
          />
          <h4 className="text-center	">KAKI</h4>
        </div>
        <div class="item">
          <img
                src="/img/l8.jpg"
                alt="unsplash"
          />
          <h4 className="text-center	">BRIEFS</h4>
        </div>
        <div class="item">
          <img
                src="/img/l10.jpg"
                alt="unsplash"
          />
          <h4>TOPS</h4>
        </div>
        <div class="item">
          <img
src="/img/l2.jpg"            alt="unsplash"
          />
          <h4>Lorem ipsum4</h4>
        </div>
        <div class="item">
          <img
                src="/img/l3.jpg"
                alt="unsplash"
          />
          <h4 className="text-center	">Lorem 2</h4>
        </div>
        <div class="item">
          <img
                src="/img/l4.jpg"
                alt="unsplash"
          />
          <h4 className="text-center	">Lorem 2</h4>
        </div>
        <div class="item">
        <img
                src="/img/l5.jpg"
                alt="unsplash"
          />
          <h4 className="text-center	">Lorem 2</h4>
        </div>
        <div class="item">
          <img
                src="/img/l6.jpg"
                alt="unsplash"
          />
          <h4 className="text-center	">Lorem 2</h4>
        </div>
      </div>
    </div>
  );
}

export default Shop;