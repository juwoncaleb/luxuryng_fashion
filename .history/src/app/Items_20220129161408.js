
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

function Items({ id, name, price, size, image }) {
  if (typeof window !== "undefined")

  window.onload = function () {

    //// SLIDER
    var slider = document.getElementById("sliderBlock_items");
    var slides = document.getElementById("sliderBlock_items__itemPhoto");
    var next = document.getElementById("sliderBlock_controls__arrowForward")[0];
    var previous = document.getElementById("sliderBlock_controls__arrowBackward")[0];
    var items = document.getElementById("sliderBlock_positionControls")[0];
    var currentSlideItem = document.getElementById("sliderBlock_positionControls__paginatorItem");

    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 5000);  /// Delay time of slides

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function previousSlide() {
        goToSlide(currentSlide - 1);
    }


    function goToSlide(n) {
        slides[currentSlide].className = 'sliderBlock_items__itemPhoto';
        items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'sliderBlock_items__itemPhoto sliderBlock_items__showing';
        items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active';
    }


    next.onclick = function () {
        nextSlide();
    };
    previous.onclick = function () {
        previousSlide();
    };


    function goToSlideAfterPushTheMiniBlock() {
        for (var i = 0; i < currentSlideItem.length; i++) {
            currentSlideItem[i].onclick = function (i) {
                var index = Array.prototype.indexOf.call(currentSlideItem, this);
                goToSlide(index);
            }
        }
    }

    goToSlideAfterPushTheMiniBlock();


/////////////////////////////////////////////////////////

///// Specification Field


    var buttonFullSpecification = document.getElementById("block_specification")[0];
    var buttonSpecification = document.getElementById("block_specification__specificationShow")[0];
    var buttonInformation = document.getElementById("block_specification__informationShow")[0];

    var blockCharacteristiic = document.querySelector(".block_descriptionCharacteristic");
    var activeCharacteristic = document.querySelector(".block_descriptionCharacteristic__active");


    buttonFullSpecification.onclick = function () {

        console.log("OK");


        buttonSpecification.classList.toggle("hide");
        buttonInformation.classList.toggle("hide");


        blockCharacteristiic.classList.toggle("block_descriptionCharacteristic__active");


    };


/////  QUANTITY ITEMS

    var up = document.getElementById('block_quantity__up')[0],
        down = document.getElementById('block_quantity__down')[0],
        input = document.getElementById('block_quantity__number')[0];

    function getValue() {
        return parseInt(input.value);
    }

    up.onclick = function (event) {
        input.value = getValue() + 1;
    };
    down.onclick = function (event) {
        if (input.value <= 1) {
            return 1;
        } else {
            input.value = getValue() - 1;
        }

    }


};
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
          <main id="main">
            <div id="mainWrapper">
              <div id="mainBackground clearfix">
                <div id="row">
                  <div id="column small-centered">
                    <div id="productCard_block">
                      <div id="row">
                        <div id="small-12 large-6 columns">
                          <div id="productCard_leftSide clearfix">
                            <div id="sliderBlock">
                              <ul id="sliderBlock_items">
                                <li id="sliderBlock_items__itemPhoto sliderBlock_items__showing">
                                  <img
                                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones1.png?raw=true"
                                    alt="headphones"
                                  />
                                </li>
                                <li id="sliderBlock_items__itemPhoto">
                                  <img
                                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones2.png?raw=true"
                                    alt="headphones"
                                  />
                                </li>
                                <li id="sliderBlock_items__itemPhoto">
                                  <img
                                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones3.png?raw=true"
                                    alt="headphones"
                                  />
                                </li>
                                <li id="sliderBlock_items__itemPhoto">
                                  <img
                                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones4.png?raw=true"
                                    alt="headphones"
                                  />
                                </li>
                                <li id="sliderBlock_items__itemPhoto">
                                  <img
                                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones5.png?raw=true"
                                    alt="headphones"
                                  />
                                </li>
                              </ul>

                              <div id="sliderBlock_controls">
                                <div id="sliderBlock_controls__navigatin">
                                  <div id="sliderBlock_controls__wrapper">
                                    <div id="sliderBlock_controls__arrow sliderBlock_controls__arrowBackward">
                                      <i
                                        id="fa fa-angle-left"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                    <div id="sliderBlock_controls__arrow sliderBlock_controls__arrowForward">
                                      <i
                                        id="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </div>

                                <ul id="sliderBlock_positionControls">
                                  <li id="sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active"></li>
                                  <li id="sliderBlock_positionControls__paginatorItem"></li>
                                  <li id="sliderBlock_positionControls__paginatorItem"></li>
                                  <li id="sliderBlock_positionControls__paginatorItem"></li>
                                  <li id="sliderBlock_positionControls__paginatorItem"></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="small-12 large-6 columns">
                          <div id="productCard_rightSide">
                            <div id="block_specification">
                              <div id="block_specification__specificationShow">
                                <i
                                  id="fa fa-cog block_specification__button block_specification__button__rotate"
                                  aria-hidden="true"
                                ></i>
                                <span id="block_specification__text">
                                  spec
                                </span>
                              </div>
                              <div id="block_specification__informationShow hide">
                                <i
                                  id="fa fa-info-circle block_specification__button block_specification__button__jump"
                                  aria-hidden="true"
                                ></i>
                                <span id="block_specification__text">
                                  inform
                                </span>
                              </div>
                            </div>

                            <p id="block_model">
                              <span id="block_model__text">Model: </span>
                              <span id="block_model__number">505795</span>
                            </p>

                            <div id="block_product">
                              <h2 id="block_name block_name__mainName">
                                MOMENTUM<sup>&reg; </sup>
                              </h2>
                              <h2 id="block_name block_name__addName">
                                Wireless Black
                              </h2>

                              <p id="block_product__advantagesProduct">
                                Wireless headphones with integrated microphone
                              </p>

                              <div id="block_informationAboutDevice">
                                <div id="block_descriptionCharacteristic block_descriptionCharacteristic__disActive">
                                  <table id="block_specificationInformation_table">
                                    <tr>
                                      <th>Characteristic</th>
                                      <th>Value</th>
                                    </tr>
                                    <tr>
                                      <td>Ear Coupling</td>
                                      <td>Around Ear</td>
                                    </tr>
                                    <tr>
                                      <td>Transducer Principle</td>
                                      <td>Dynamic, Closed-back</td>
                                    </tr>
                                    <tr>
                                      <td>Frequency Response</td>
                                      <td>16Hz – 22kHz</td>
                                    </tr>
                                    <tr>
                                      <td>Sound Pressure Level (SPL)</td>
                                      <td>113 dB (Passive: 1 kHz/1 Vrms)</td>
                                    </tr>
                                    <tr>
                                      <td>Total Harmonic Distortion (THD)</td>
                                      <td>&lt;0.5% (1 kHz, 100 dB SPL)</td>
                                    </tr>
                                    <tr>
                                      <td>Volume Control</td>
                                      <td>
                                        Earcup control when Bluetooth connected
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Microphone Type</td>
                                      <td>
                                        Dual omni-directional microphone <br />
                                        (2 mic beam forming array)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Cable / Connector</td>
                                      <td>1.4m (Detachable) / 3.5mm Angled</td>
                                    </tr>
                                    <tr>
                                      <td>Weight</td>
                                      <td>260g (9.17 oz)</td>
                                    </tr>
                                  </table>
                                </div>

                                <div id="block_descriptionInformation">
                                  <span>
                                    Peak performance with active noise
                                    cancelation. Sennheiser's new MOMENTUM
                                    Wireless - Closed circumauralheadphone
                                    featuring{" "}
                                    <a id="block_product__link" href="#">
                                      Bluetooth<sup>&reg;</sup>
                                    </a>{" "}
                                    wireless technology and NoiseGard Hybrid
                                    active noise cancelation
                                  </span>
                                </div>

                                <div id="block_rating clearfix">
                                  <fieldset id="block_rating__stars">
                                    <input
                                      type="radio"
                                      id="star5"
                                      name="rating"
                                      value="5"
                                    />
                                    <label
                                      id="full"
                                      for="star5"
                                      title="Awesome - 5 stars"
                                    ></label>
                                    <input
                                      type="radio"
                                      id="star4half"
                                      name="rating"
                                      value="4 and a half"
                                    />
                                    <label
                                      id="half"
                                      for="star4half"
                                      title="Pretty good - 4.5 stars"
                                    ></label>
                                    <input
                                      type="radio"
                                      id="star4"
                                      name="rating"
                                      value="4"
                                    />
                                    <label
                                      id="full"
                                      for="star4"
                                      title="Good - 4 stars"
                                    ></label>
                                    <input
                                      type="radio"
                                      id="star3half"
                                      name="rating"
                                      value="3 and a half"
                                    />
                                    <label
                                      id="half"
                                      for="star3half"
                                      title="Above average - 3.5 stars"
                                    ></label>
                                    <input
                                      type="radio"
                                      id="star3"
                                      name="rating"
                                      value="3"
                                    />
                                    <label
                                      id="full"
                                      for="star3"
                                      title="Average - 3 stars"
                                    ></label>
                                    <input
                                      type="radio"
                                      id="star2half"
                                      name="rating"
                                      value="2 and a half"
                                    />
                                    <label
                                      id="half"
                                      for="star2half"
                                      title="Kinda bad - 2.5 stars"
                                    ></label>
                                    <input
                                      type="radio"
                                      id="star2"
                                      name="rating"
                                      value="2"
                                    />
                                    <label
                                      id="full"
                                      for="star2"
                                      title="Kinda bad - 2 stars"
                                    ></label>
                                    <input
                                      type="radio"
                                      id="star1half"
                                      name="rating"
                                      value="1 and a half"
                                    />
                                    <label
                                      id="half"
                                      for="star1half"
                                      title="Meh - 1.5 stars"
                                    ></label>
                                    <input
                                      type="radio"
                                      id="star1"
                                      name="rating"
                                      value="1"
                                    />
                                    <label
                                      id="full"
                                      for="star1"
                                      title="Sucks big time - 1 star"
                                    ></label>
                                    <input
                                      type="radio"
                                      id="starhalf"
                                      name="rating"
                                      value="half"
                                    />
                                    <label
                                      id="half"
                                      for="starhalf"
                                      title="Sucks big time - 0.5 stars"
                                    ></label>
                                  </fieldset>

                                  <span id="block_rating__avarage">
                                    4.25
                                  </span>
                                  <span id="block_rating__reviews">
                                    (153 reviews)
                                  </span>
                                </div>
                                <div id="row ">
                                  <div id="large-6 small-12 column left-align">
                                    <div id="block_price">
                                      <p id="block_price__currency">
                                        $499.95
                                      </p>
                                      <p id="block_price__shipping">
                                        Shipping and taxes extra
                                      </p>
                                    </div>
                                    <div id="block_quantity clearfix">
                                      <span id="text_specification">
                                        Quantity
                                      </span>
                                      <div id="block_quantity__chooseBlock">
                                        <input
                                          id="block_quantity__number"
                                          name="quantityNumber"
                                          type="text"
                                          min="1"
                                          value="1"
                                        />
                                        <button id="block_quantity__button block_quantity__up"></button>
                                        <button id="block_quantity__button block_quantity__down"></button>
                                      </div>
                                    </div>
                                  </div>
                                  <div id="large-6 small-12 column end">
                                    <div id="block_goodColor">
                                      <span id="text_specification">
                                        Choose your colors:
                                      </span>
                                      <div id="block_goodColor__allColors">
                                        <input
                                          type="radio"
                                          name="colorOfItem"
                                          id="radio_button"
                                          id="radioColor"
                                          checked
                                        />
                                        <label
                                          for="radioColor"
                                          id="block_goodColor__radio block_goodColor__black"
                                        ></label>
                                        <input
                                          type="radio"
                                          name="colorOfItem"
                                          id="radio_button"
                                          id="radioColor2"
                                        />
                                        <label
                                          for="radioColor2"
                                          id="block_goodColor__radio block_goodColor__silver"
                                        ></label>
                                      </div>
                                    </div>
                                    <button id="button button_addToCard">
                                      Add to Cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div id="aboutMe">
            <a
              href="https://codepen.io/BlackStar1991/pens/public/"
              target="_new"
            >
              <i id="fa fa-codepen"></i> my other Pens
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
