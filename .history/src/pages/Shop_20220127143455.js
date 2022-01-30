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
          <h3 className="text-center	">Lorem 2</h3>
        </div>
        <div class="item">
          <img
                src="/img/l8.jpg"
                alt="unsplash"
          />
          <h3>Lorem 2</h3>
        </div>
        <div class="item">
          <img
                src="/img/l10.jpg"
                alt="unsplash"
          />
          <h3>Lorem ipsum3</h3>
        </div>
        <div class="item">
          <img
src="/img/l2.jpg"            alt="unsplash"
          />
          <h3>Lorem ipsum4</h3>
        </div>
        <div class="item">
          <img
                src="/img/l3.jpg"
                alt="unsplash"
          />
          <h3>Lorem 2</h3>
        </div>
        <div class="item">
          <img
                src="/img/l4.jpg"
                alt="unsplash"
          />
          <h3>Lorem 2</h3>
        </div>
        <div class="item">
          <img
                src="/img/l5.jpg"
                alt="unsplash"
          />
          <h3>Lorem ipsum3</h3>
        </div>
        <div class="item">
          <img
                src="/img/l6.jpg"
                alt="unsplash"
          />
          <h3>Lorem ipsum4</h3>
        </div>
      </div>
    </div>
  );
}

export default Shop;