import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Items({ id, name, price, size, image, original, thumbnail }) {
  const [active, setActive] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      image,
      name,
      size,
      price,
    };
    setActive("active");
    dispatch(addToBasket(product));
  };

  return (
    <div className="w-screen">
      <div className=" w-full	 flex-col m-0 md:m-5 bg-white z-30 p-10">
        <div className="relative flex flex-col w-full m-0 md:m-5 bg-white z-30 p-10">
      
        <!-- Carousel wrapper -->
<div
  id="carouselExampleIndicators"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  <!-- Slides -->
  <div class="carousel-inner mb-5">
    <div class="carousel-item active">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp"
        class="d-block w-100"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp"
        class="d-block w-100"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp"
        class="d-block w-100"
        alt="..."
      />
    </div>
  </div>
  <!-- Slides -->

  <!-- Controls -->
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselExampleIndicators"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselExampleIndicators"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <!-- Controls -->

  <!-- Thumbnails -->
  <div class="carousel-indicators" style="margin-bottom: -20px;">
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
      style="width: 100px;"
    >
      <img
        class="d-block w-100"
        src="https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(88).webp"
        class="img-fluid"
      />
    </button>
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
      style="width: 100px;"
    >
      <img
        class="d-block w-100"
        src="https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(121).webp"
        class="img-fluid"
      />
    </button>
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
      style="width: 100px;"
    >
      <img
        class="d-block w-100"
        src="https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(31).webp"
        class="img-fluid"
      />
    </button>
  </div>
</div>
<!-- Carousel wrapper -->
          
          <p className=" itemsText  t font-semibold text-center display 	">
            {name}
          </p>
          <p className="itemsText t font-semibold text-center display	">
            {" "}
            N{price}
          </p>

          <button
            onClick={addItemToBasket}
            className={`but ml-0 md:ml-10 ${active} `}
          >
            <p id="btnText">Add to cart</p>
            <div class="check-box">
              <svg
                style={{
                  style: 3,
                  stroke: "white",
                  strokeDasharray: 34,
                  strokeDashoffset: 34,
                  strokeLinecap: "round",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
