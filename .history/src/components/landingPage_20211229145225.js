import Image from "next/image";
import { Container, Col, Row } from 'react-bootstrap';

import { Carousel } from "react-responsive-carousel";
import '@fortawesome/fontawesome-free/js/all.js';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Footer from "./Footer";



function LandingPage() {


    return (
        <div>
            {/* landing page 1/4 */}
            <div className="grid ">
                <div className="relative">
                    <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />


                    <Carousel
                        preventMovementUntilSwipeScrollTolerance={true}
                        swipeScrollTolerance={100}

                        useKeyboardArrows={true}
                        stopOnHover={false}
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showIndicators={false}
                        showThumbs={false}
                        interval={4000}>

                        <div >
                            <img className="h-screen bg-cover bg-center object-cover" loading="lazy" src="/img/landingpage/1.jpg" />



                            <div className="w-full h-full flex flex-col absolute top-6 right-10  justify-center items-center">
                               <h1 className="t">LUXURY WEAR</h1>
                            </div>
                        </div>

                        <div className="">
                            <img className="h-screen bg-cover bg-center object-cover	" loading="lazy" src="/img/landingpage/6.jpg" />

                            <div className="w-full h-full flex flex-col absolute top-6 right-10 justify-center items-center">
                            <h1 className="t">LUXURY WEAR</h1>

                
                            </div>
                        </div>

                        <div className="">
                            <img className="h-screen bg-cover bg-center object-cover" loading="lazy" src="/img/landingpage/5.jpg" />
                            <div className="w-full h-full flex flex-col absolute top-6 right-10  justify-center items-center">
                               
                            </div>
                        </div>

                        <div className="">
                            <img className="h-screen bg-cover bg-center object-cover" loading="lazy" src="/img/landingpage/8.jpg" />
                            <div className="w-full h-full flex flex-col absolute top-6 right-10  justify-center items-center">
                       
                            </div>
                        </div>

                        <div className="">
                            <img className="h-screen bg-cover bg-center object-cover" loading="lazy" src="/img/landingpage/9.jpg" />
                            <div className="w-full h-full flex flex-col absolute top-6 right-10  justify-center items-center">

                               
                            </div>
                        </div>


                    </Carousel>
                </div>

            </div>
            <div className="bg-white mt-16  page ">
                {/*TEXTS*/}


                <div className=" ">
                    <p className="text-center text-black text-3xl	t font-bold md:text-5xl lg:text-5xl ">Welcome to luxury Wears</p>

                    <p className="text-center text-black text-3xl t	 font-bold md:text-5xl lg:text-5xl 	">Your one stop shop for High-end streetwear</p>
                    <p className="text-center text-black text-3xl t	 font-bold md:text-5xl lg:text-5xl 	">Open Mon - Saturday (10am-6pm)</p>
                    <br />
                    <br />
                    <br />

                    <p className="text-center text-black text-3xl	t font-bold md:text-5xl lg:text-5xl 	">Top selling this week</p>



                </div>



                {/* CLOTHES */}
                <div className="clothes content-center ml-10 pl-2	 ">

                    <Image
                        width={400}
                        height={300}
                        src="/img/travis/rot1.png"

                    />


                    <Image className="boxy "
                        width={460}
                        height={360}
                        src="/img/fearOfGod/rot2.png"

                    />
                    <Image
                        className=" boxy "
                        width={400}
                        height={400}
                        src="/img/caps/vondutch/von5.png"
                    />


                    <Image
                        className="boxy  ml-5"
                        width={370}
                        height={360}
                        src="/img/travis/rott.png"
                    />

                </div>

                <br />
                <br />
                <br />

                <p className="text-center text-black text-3xl font-	t  md:text-5xl lg:text-5xl 	">Brand </p>



                <div class="page2_sub  flex">

                    <div class="page2_sub_container pt-20">
                        <div className="box">
                            <img

                                src="/img/model2.jpg"

                            /><span className="text-center text-navbar t text-base font-semibold">NIKE</span>
                        </div>
                        <div class="box">
                            <img

                                src="/img/model.png"

                            /><span className="text-center text-navbar t text-base font-semibold">FEAR OF GOD</span>
                        </div>
                        <div class="box">
                            <img

                                src="/img/model2.jpg"

                            /><span className="text-center text-navbar t text-base font-semibold">GUCCI</span>
                        </div>
                        <div class="box">
                            <img

                                src="/img/travis/rooo.png"

                            /><span className="text-center text-navbar t text-base font-semibold">ADER</span>
                        </div>
                    </div>

                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


                <div className="bg-black h-96	md:h-72 mt-10 customer  ">


                    <div className="terms">
                        <img width="50px" src="/img/customer-service.png" className="bg-white" />
                        <p className=" text-white	 text-lg font-semibold pt-6">Customer  <br /> service</p>
                    </div>

                    <div className="terms">
                        <img width="50px" src="/img/delivery.png" className="bg-white" />
                        <p className=" text-white	  text-lg font-semibold pt-6"> Fast  <br /> Delivery</p>


                    </div>

                    <div className="terms">
                        <img width="50px" src="/img/payment-method.png" className="bg-white" />
                        <p className=" text-white	 text-lg font-semibold pt-6">Secure Online <br /> Payment</p>

                    </div>




                </div>
            </div>


            <div class="container-fluid mb-14">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 col-sm-12 col-xs-12">
                        <div class="card p-3 p-md-4 text-white"> <span><i class="fa fa-envelope-open-o fa-2x" aria-hidden="true"></i></span>
                            <h6 class="my-3 text-black text-center font-semibold"> Subscribe to the newsletter </h6>
                            <div class="row d-flex my-2 pr-2 pr-md-5 div1">
                                <div class="col-9"> <input type="email" class="form-control bg-white py-3" id="inp1" placeholder="Enter email address" /> </div>
                                <div class="col-3 px-0"> <button class="button send text-white px-4 py-2"> Send </button> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
            <Footer/> */}

            <div class="footer">

                <div class="content">

                    <div class="social-media">
                        <h4 className="font-semibold">Social</h4>

                        <p>
                            <a href="https://twitter.com/Sanket46171296"
                            ><i class="fab fa-twitter"></i>  <br />

                            </a
                            >
                        </p>


                        <p>
                            <a href="https://www.instagram.com/imsanketbodke/?hl=en"
                            ><i class="fab fa-instagram"> </i> <br />

                            </a
                            >
                        </p>
                    </div>
                    <div class="links">
                        <h4 className="font-semibold">Quick links</h4>
                        <p><a href="#">Terms Of Service</a></p>
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Return Policy</a></p>
                        <p><a href="#">Contact</a></p>
                        <p><a href="#">FAQ</a></p>

                    </div>
                    <div class="details">
                        <h4 class="address font-semibold">Address</h4>
                        <p>
                            LAGOS ISLAND
                        </p>
                        <h4 class="mobile">Mobile</h4>
                        <p><a href="#">+9112233445</a></p>
                        <h4 class="mail">Email</h4>
                        <p><a href="#">abcdef@gmail.com</a></p>
                    </div>
                </div>
                <footer>
                    <hr />
                    2021 ABCDEF Technologies Pvt. Ltd.
                </footer>
            </div>


            {/* <script src="/slider.js" type="text/javascript"></script> */}

        </div>
    )

}


export default LandingPage




