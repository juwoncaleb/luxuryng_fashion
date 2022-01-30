import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";
import ImageGallery from 'react-image-gallery';
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Items({ id, name, price, size, image , original , thumbnail }) {
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

        <div class="connntainer">
    <input type="radio" name="slider" id="item-1" checked/>
    <input type="radio" name="slider" id="item-2"/>
    <input type="radio" name="slider" id="item-3"/>
  <div class="cards">
    <label class="card" for="item-1" id="song-1">
      <img className="image" src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song"/>
    </label>
    <label class="card" for="item-2" id="song-2">
      <img  src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song"/>
    </label>
    <label class="card" for="item-3" id="song-3">
      <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song"/>
    </label>
  </div>
  <div class="player">
    <div class="upper-part">
      <div class="play-icon">
        <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-play" viewBox="0 0 24 24">
          <defs/>
          <path d="M5 3l14 9-14 9V3z"/>
        </svg>
      </div>
      <div class="info-area" id="test">
        <label class="song-info" id="song-info-1">
          <div class="title">Bunker</div>
          <div class="sub-line">
            <div class="subtitle">Balthazar</div>
            <div class="time">4.05</div>
          </div>
        </label>
        <label class="song-info" id="song-info-2">
          <div class="title">Words Remain</div>
          <div class="sub-line">
            <div class="subtitle">Moderator</div>
            <div class="time">4.05</div>
          </div>
        </label>
        <label class="song-info" id="song-info-3">
          <div class="title">Falling Out</div>
          <div class="sub-line">
            <div class="subtitle">Otzeki</div>
            <div class="time">4.05</div>
          </div>
        </label>
      </div>
    </div>
    <div class="progress-bar">
      <span class="progress"></span>
    </div>
  </div>
</div>
                <p className=" itemsText  t font-semibold text-center display 	">{name}</p>
                <p className="itemsText t font-semibold text-center display	"> N{price}</p>


                <button onClick={addItemToBasket} className={`but ml-0 md:ml-10 ${active} `}>
                    <p id="btnText">Add to cart</p>
                    <div class="check-box">
                        <svg style={{ style: 3, stroke: "white", strokeDasharray: 34, strokeDashoffset: 34, strokeLinecap: "round" }}
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
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
