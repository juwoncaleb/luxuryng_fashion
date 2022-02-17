import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CheckoutProduct from "../components/CheckoutProduct";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Items({ id, name, price, size, image1, image2, image3 }) {
  const [active, setActive] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [count, setCount] = useState(0);
  const order = console.log(name, itemSize);

  const router = useRouter();
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    console.log(image1);
    console.log(itemSize);
    console.log(count);

    const product = {
      id,
      image1,
      name,
      size,
      price,
      itemSize,
      count,
    };
    setActive("active");
    dispatch(addToBasket(product));
  };

  return (
    <div className="w-screen">
      <div className=" w-full	 flex-col m-0 md:m-5 bg-white z-30 p-10">
        <div className="relative flex flex-col w-full m-0 md:m-5 bg-white z-30 p-10">
        <main class="main">
    <div class="mainWrapper">
        <div class="mainBackground clearfix">
            <div class="row">
                <div class="column small-centered">
                    <div class="productCargd_block">
                        <div class="row">
                            <div class="small-12 large-6 columns">
                                <div class="productCard_leftSide clearfix">
                                    

                                    <div class="sliderBlock">
                                        <ul class="sliderBlock_items">
                                            <li class="sliderBlock_items__itemPhoto sliderBlock_items__showing">
                                                <img src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones1.png?raw=true" alt="headphones"/>
                                            </li>
                                            <li class="sliderBlock_items__itemPhoto">
                                                <img src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones2.png?raw=true"  alt="headphones"/>
                                            </li>
                                            <li class="sliderBlock_items__itemPhoto">
                                                <img src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones3.png?raw=true"  alt="headphones"/>
                                            </li>
                                            <li class="sliderBlock_items__itemPhoto">
                                                <img src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones4.png?raw=true"  alt="headphones"/>
                                            </li>
                                            <li class="sliderBlock_items__itemPhoto">
                                                <img src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones5.png?raw=true"  alt="headphones"/>
                                            </li>
                                        </ul>

                                        
                                        <div class="sliderBlock_controls">
                                            <div class="sliderBlock_controls__navigatin">
                                                <div class="sliderBlock_controls__wrapper">
                                                    <div class="sliderBlock_controls__arrow sliderBlock_controls__arrowBackward">
                                                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="sliderBlock_controls__arrow sliderBlock_controls__arrowForward">
                                                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul class="sliderBlock_positionControls">
                                                <li class="sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active"></li>
                                                <li class="sliderBlock_positionControls__paginatorItem"></li>
                                                <li class="sliderBlock_positionControls__paginatorItem"></li>
                                                <li class="sliderBlock_positionControls__paginatorItem"></li>
                                                <li class="sliderBlock_positionControls__paginatorItem"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="small-12 large-6 columns">
                                <div class="productCard_rightSide">
                                    <div class="block_specification">
                                        <div class="block_specification__specificationShow">
                                            <i class="fa fa-cog block_specification__button block_specification__button__rotate"
                                               aria-hidden="true"></i>
                                            <span class="block_specification__text">spec</span>
                                        </div>
                                        <div class="block_specification__informationShow hide">
                                            <i class="fa fa-info-circle block_specification__button block_specification__button__jump"
                                               aria-hidden="true"></i>
                                            <span class="block_specification__text">inform</span>
                                        </div>
                                    </div>

                                    <p class="block_model">
                                        <span class="block_model__text">Model: </span>
                                        <span class="block_model__number">505795</span>
                                    </p>

                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>

<div class="aboutMe">
<a href="https://codepen.io/BlackStar1991/pens/public/" target="_new">
    <i class='fa fa-codepen'></i> my other Pens</a>
</div>
          
        </div>
      </div>
    </div>
  );
}

export default Items;
