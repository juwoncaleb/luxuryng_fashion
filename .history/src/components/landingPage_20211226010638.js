import Image from "next/image";
import { Container, Col, Row } from 'react-bootstrap';

import { Carousel } from "react-responsive-carousel";
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



                            <div className="w-full h-full flex flex-col absolute top-6 right-7 justify-center items-center">
                                <h1 className="text-white font-bold text landingpagetext">EXPLORE YOUR TRUE</h1>
                                <br />
                                <h1 className="text-white font-bold text landingpagetext">STYLE</h1>
                            </div>
                        </div>

                        <div className="">
                            <img className="h-screen bg-cover bg-center object-cover	" loading="lazy" src="/img/landingpage/6.jpg" />

                            <div className="w-full h-full flex flex-col absolute top-6 right-7 justify-center items-center">
                                <h1 className="text-black font-bold text landingpagetext">EXPLORE YOUR TRUE</h1>
                                <br />
                                <h1 className="text-black font-bold text landingpagetext ">STYLE</h1>
                            </div>
                        </div>

                        <div className="">
                            <img className="h-screen bg-cover bg-center object-cover" loading="lazy" src="/img/landingpage/5.jpg" />
                            <div className="w-full h-full flex flex-col absolute top-6 right-7 justify-center items-center">
                                <h1 className="text-white font-bold text landingpagetext">EXPLORE YOUR TRUE</h1>
                                <br />
                                <h1 className="text-white font-bold text landingpagetext">STYLE</h1>
                            </div>
                        </div>

                        <div className="">
                            <img className="h-screen bg-cover bg-center object-cover" loading="lazy" src="/img/landingpage/8.jpg" />
                            <div className="w-full h-full flex flex-col absolute top-6 right-7 justify-center items-center">
                                <h1 className="text-white font-bold text landingpagetext">EXPLORE YOUR TRUE</h1>
                                <br />
                                <h1 className="text-white font-bold text landingpagetext">STYLE</h1>
                            </div>
                        </div>

                        <div className="">
                            <img className="h-screen bg-cover bg-center object-cover" loading="lazy" src="/img/landingpage/9.jpg" />
                            <div className="w-full h-full flex flex-col absolute top-6 right-7 justify-center items-center">

                                <h1 className="text-white font-bold text landingpagetext">EXPLORE YOUR TRUE</h1>
                                <br />
                                <h1 className="text-white font-bold text landingpagetext">STYLE</h1>
                            </div>
                        </div>


                    </Carousel>
                </div>

            </div>
            <div className="bg-white l  page ">
                {/*TEXTS*/}


                <div className=" ">
                    <p className="text-center text-navbar text-2xl	 font-semibold md:text-5xl lg:text-5xl ">Welcome to luxury Wears</p>

                    <p className="text-center text-navbar text-lg	 font-semibold md:text-5xl lg:text-5xl 	">Your one stop shop for High-end streetwear</p>
                    <p className="text-center text-navbar text-lg	 font-semibold md:text-5xl lg:text-5xl 	">Open Mon - Saturday (10am-6pm)</p>
                    <p className="text-center text-navbar text-lg	 font-semibold md:text-5xl lg:text-5xl 	">We deliver </p>




                </div>



                {/* CLOTHES */}
                <div className="clothes content-center ml-16 pl-2	 ">
                    <Image className="boxy bounce-1"
                        width={400}
                        height={300}
                        src="/img/travis/rot1.png"
                    />
                    <Image className="boxy bounce-1"
                        width={460}
                        height={360}
                        src="/img/fearOfGod/rot2.png"

                    />
                    <Image
                        className=" boxy bounce-1"
                        width={400}
                        height={400}
                        src="/img/caps/vondutch/von5.png"
                    />


                    <Image
                        className="boxy bounce-1 ml-5"
                        width={370}
                        height={360}
                        src="/img/travis/rott.png"
                    />

                </div>




                <div class="page2_sub  flex">

                    <div class="page2_sub_container pt-20">
                        <div className="box">
                            <img

                                src="/img/model2.jpg"

                            /><span className="text-center text-navbar text-2xl font-semibold">NIKE</span>
                        </div>
                        <div class="box">
                            <img

                                src="/img/model.png"

                            /><span className="text-center text-navbar text-2xl font-semibold">FEAR OF GOD</span>
                        </div>
                        <div class="box">
                            <img

                                src="/img/model2.jpg"

                            /><span className="text-center text-navbar text-2xl font-semibold">GUCCI</span>
                        </div>
                        <div class="box">
                            <img

                                src="/img/travis/rooo.png"

                            /><span className="text-center text-navbar text-2xl font-semibold">ADER</span>
                        </div>
                    </div>

                </div>

                <div className="flex ">
                    <div className="adidasGif ">
                        <iframe src="https://giphy.com/embed/IAmwvEs4uVf8Y" width="100%" height="100%" frameBorder="0" allowFullScreen>
                        </iframe>
                    </div>
                    <div className="adidasGif ">
                        <iframe src="https://giphy.com/embed/26FlruUbK9XSEQDoQ" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>

                    </div>
                    <div className="adidasGif ">
                        <iframe src="https://giphy.com/embed/BpRh0HV5w2zMSBFYVv" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>

                    </div>


                </div>

                <div className="giftext">
                    <p className=" bottom-9 adidas text-lg md:text-5xl pt-12 mt-32 " data-heading="Slide">ADIDAS</p>

                    <p className=" nikeboy text-lg md:text-5xl pt-12 mt-32 " data-heading="Slide">NIKE</p>
                    <p className=" newbalance  text-lg md:text-5xl pt-12 mt-32">NEW BALANCE</p>


                </div>


                <div className="bg-yellow-100 h-96	md:h-72 customer  ">


                    <div className="terms">
                        <img width="50px" src="/img/customer-service.png" />
                        <p className=" text-black	 text-lg font-semibold pt-6">24/7 Customer  <br /> service</p>
                    </div>

                    <div className="terms">
                        <img width="50px" src="/img/delivery.png" />
                        <p className=" text-black	  text-lg font-semibold pt-6"> Fast  <br /> Delivery</p>


                    </div>

                    <div className="terms">
                        <img width="50px" src="/img/payment-method.png" />
                        <p className=" text-black	 text-lg font-semibold pt-6">Secure Online <br /> Payment</p>

                    </div>




                </div>
            </div>


            <div class="container-fluid ">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 col-sm-12 col-xs-12">
                        <div class="card p-3 p-md-4 text-white"> <span><i class="fa fa-envelope-open-o fa-2x" aria-hidden="true"></i></span>
                            <h6 class="my-3 text-black"> Subscribe to the newsletter </h6>
                            <div class="row d-flex my-2 pr-2 pr-md-5 div1">
                                <div class="col-9"> <input type="email" class="form-control  py-3" id="inp1" placeholder="Enter email address"/> </div>
                                <div class="col-3 px-0"> <button class="button text-white px-4 py-2"> Send </button> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
            <Footer/> */}

            <div class="footer">

                <div class="content">
                    <div class="services">
                        <h4>Services</h4>
                        <p><a href="#">App developmen</a></p>
                        <p><a href="#">Web development</a></p>
                        <p><a href="#">DevOps</a></p>
                        <p><a href="#">Web designing</a></p>
                    </div>
                    <div class="social-media">
                        <h4>Social</h4>
                        <p>
                            <a href="https://www.linkedin.com/in/sanket-bodke-995b5b205/"
                            ><i class="fab fa-linkedin"></i> Linkedin</a
                            >
                        </p>
                        <p>
                            <a href="https://twitter.com/Sanket46171296"
                            ><i class="fab fa-twitter"></i> Twitter</a
                            >
                        </p>
                        <p>
                            <a href="https://github.com/sanketbodke"
                            ><i class="fab fa-github"></i> Github</a
                            >
                        </p>
                        <p>
                            <a href="https://codepen.io/sanketbodke"
                            ><i class="fab fa-codepen"></i> Codepen</a
                            >
                        </p>
                        <p>
                            <a href="https://www.instagram.com/imsanketbodke/?hl=en"
                            ><i class="fab fa-instagram"></i> Instagram</a
                            >
                        </p>
                    </div>
                    <div class="links">
                        <h4>Quick links</h4>
                        <p><a href="#">Home</a></p>
                        <p><a href="#">About</a></p>
                        <p><a href="#">Blogs</a></p>
                        <p><a href="#">Contact</a></p>
                    </div>
                    <div class="details">
                        <h4 class="address">Address</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur <br />
                            adipisicing elit. Cupiditate, qui!
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









