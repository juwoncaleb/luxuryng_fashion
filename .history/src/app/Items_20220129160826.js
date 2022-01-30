
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

function Items({ id, name, price, size, image }) {
  if (typeof window !== "undefined")

  window.onload = function () {

    //// SLIDER
    var slider = document.getElementsByClassName("sliderBlock_items");
    var slides = document.getElementsByClassName("sliderBlock_items__itemPhoto");
    var next = document.getElementsByClassName("sliderBlock_controls__arrowForward")[0];
    var previous = document.getElementsByClassName("sliderBlock_controls__arrowBackward")[0];
    var items = document.getElementsByClassName("sliderBlock_positionControls")[0];
    var currentSlideItem = document.getElementsByClassName("sliderBlock_positionControls__paginatorItem");

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


    var buttonFullSpecification = document.getElementsByClassName("block_specification")[0];
    var buttonSpecification = document.getElementsByClassName("block_specification__specificationShow")[0];
    var buttonInformation = document.getElementsByClassName("block_specification__informationShow")[0];

    var blockCharacteristiic = document.querySelector(".block_descriptionCharacteristic");
    var activeCharacteristic = document.querySelector(".block_descriptionCharacteristic__active");


    buttonFullSpecification.onclick = function () {

        console.log("OK");


        buttonSpecification.classList.toggle("hide");
        buttonInformation.classList.toggle("hide");


        blockCharacteristiic.classList.toggle("block_descriptionCharacteristic__active");


    };


/////  QUANTITY ITEMS

    var up = document.getElementsByClassName('block_quantity__up')[0],
        down = document.getElementsByClassName('block_quantity__down')[0],
        input = document.getElementsByClassName('block_quantity__number')[0];

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
    <divName="w-screen">
      <div className=" w-full	 flex-col m-0 md:m-5 bg-white z-30 p-10">
        <div className="relative flex flex-col w-full m-0 md:m-5 bg-white z-30 p-10">
          <main="main">
            <div="mainWrapper">
              <div="mainBackground clearfix">
                <div="row">
                  <div="column small-centered">
                    <div="productCard_block">
                      <div="row">
                        <div="small-12 large-6 columns">
                          <div="productCard_leftSide clearfix">
                            <div="sliderBlock">
                              <ul="sliderBlock_items">
                                <li="sliderBlock_items__itemPhoto sliderBlock_items__showing">
                                  <img
                                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones1.png?raw=true"
                                    alt="headphones"
                                  />
                                </li=>
                                <li="sliderBlock_items__itemPhoto">
                                  <img
                                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones2.png?raw=true"
                                    alt="headphones"
                                  />
                                </li=>
                                <li="sliderBlock_items__itemPhoto">
                                  <img
                                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones3.png?raw=true"
                                    alt="headphones"
                                  />
                                </li=>
                                <li="sliderBlock_items__itemPhoto">
                                  <img
                                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones4.png?raw=true"
                                    alt="headphones"
                                  />
                                </li=>
                                <li="sliderBlock_items__itemPhoto">
                                  <img
                                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones5.png?raw=true"
                                    alt="headphones"
                                  />
                                </li=>
                              </ul>

                              <div="sliderBlock_controls">
                                <div="sliderBlock_controls__navigatin">
                                  <div="sliderBlock_controls__wrapper">
                                    <div="sliderBlock_controls__arrow sliderBlock_controls__arrowBackward">
                                      <i
                                       ="fa fa-angle-left"
                                        aria-hidden="true"
                                      ></i>
                                    </div=>
                                    <div="sliderBlock_controls__arrow sliderBlock_controls__arrowForward">
                                      <i
                                       ="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </div=>
                                  </div>
                                </div>

                                <ul="sliderBlock_positionControls">
                                  <li="sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active"></li=>
                                  <li="sliderBlock_positionControls__paginatorItem"></li=>
                                  <li="sliderBlock_positionControls__paginatorItem"></li=>
                                  <li="sliderBlock_positionControls__paginatorItem"></li=>
                                  <li="sliderBlock_positionControls__paginatorItem"></li=>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div="small-12 large-6 columns">
                          <div="productCard_rightSide">
                            <div="block_specification">
                              <div="block_specification__specificationShow">
                                <i
                                 ="fa fa-cog block_specification__button block_specification__button__rotate"
                                  aria-hidden="true"
                                ></i>
                                <span="block_specification__text">
                                  spec
                                </span=>
                              </div>
                              <div="block_specification__informationShow hide">
                                <i
                                 ="fa fa-info-circle block_specification__button block_specification__button__jump"
                                  aria-hidden="true"
                                ></i>
                                <span="block_specification__text">
                                  inform
                                </span=>
                              </div>
                            </div>

                            <p="block_model">
                              <span="block_model__text">Model: </span=>
                              <span="block_model__number">505795</span=>
                            </p>

                            <div="block_product">
                              <h2="block_name block_name__mainName">
                                MOMENTUM<sup>&reg; </sup>
                              </h2=>
                              <h2="block_name block_name__addName">
                                Wireless Black
                              </h2=>

                              <p="block_product__advantagesProduct">
                                Wireless headphones with integrated microphone
                              </p=>

                              <div="block_informationAboutDevice">
                                <div="block_descriptionCharacteristic block_descriptionCharacteristic__disActive">
                                  <table="block_specificationInformation_table">
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
                                  </table=>
                                </div>

                                <div="block_descriptionInformation">
                                  <span>
                                    Peak performance with active noise
                                    cancelation. Sennheiser's new MOMENTUM
                                    Wireless - Closed circumauralheadphone
                                    featuring{" "}
                                    <a="block_product__link" href="#">
                                      Bluetooth<sup>&reg;</sup>
                                    </a=>{" "}
                                    wireless technology and NoiseGard Hybrid
                                    active noise cancelation
                                  </span>
                                </div>

                                <div="block_rating clearfix">
                                  <fieldset="block_rating__stars">
                                    <input
                                      type="radio"
                                      id="star5"
                                      name="rating"
                                      value="5"
                                    />
                                    <label
                                     ="full"
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
                                     ="half"
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
                                     ="full"
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
                                     ="half"
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
                                     ="full"
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
                                     ="half"
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
                                     ="full"
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
                                     ="half"
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
                                     ="full"
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
                                     ="half"
                                      for="starhalf"
                                      title="Sucks big time - 0.5 stars"
                                    ></label>
                                  </fieldset=>

                                  <span="block_rating__avarage">
                                    4.25
                                  </span=>
                                  <span="block_rating__reviews">
                                    (153 reviews)
                                  </span=>
                                </div>
                                <div="row ">
                                  <div="large-6 small-12 column left-align">
                                    <div="block_price">
                                      <p="block_price__currency">
                                        $499.95
                                      </p=>
                                      <p="block_price__shipping">
                                        Shipping and taxes extra
                                      </p=>
                                    </div>
                                    <div="block_quantity clearfix">
                                      <span="text_specification">
                                        Quantity
                                      </span=>
                                      <div="block_quantity__chooseBlock">
                                        <input
                                         ="block_quantity__number"
                                          name="quantityNumber"
                                          type="text"
                                          min="1"
                                          value="1"
                                        />
                                        <button="block_quantity__button block_quantity__up"></button=>
                                        <button="block_quantity__button block_quantity__down"></button=>
                                      </div>
                                    </div>
                                  </div>
                                  <div="large-6 small-12 column end">
                                    <div="block_goodColor">
                                      <span="text_specification">
                                        Choose your colors:
                                      </span=>
                                      <div="block_goodColor__allColors">
                                        <input
                                          type="radio"
                                          name="colorOfItem"
                                         ="radio_button"
                                          id="radioColor"
                                          checked
                                        />
                                        <label
                                          for="radioColor"
                                         ="block_goodColor__radio block_goodColor__black"
                                        ></label>
                                        <input
                                          type="radio"
                                          name="colorOfItem"
                                         ="radio_button"
                                          id="radioColor2"
                                        />
                                        <label
                                          for="radioColor2"
                                         ="block_goodColor__radio block_goodColor__silver"
                                        ></label>
                                      </div=>
                                    </div>
                                    <button="button button_addToCard">
                                      Add to Cart
                                    </button=>
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

          <div="aboutMe">
            <a
              href="https://codepen.io/BlackStar1991/pens/public/"
              target="_new"
            >
              <i="fa fa-codepen"></i=> my other Pens
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
