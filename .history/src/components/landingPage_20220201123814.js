import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";

import { Carousel } from "react-responsive-carousel";
import "@fortawesome/fontawesome-free/js/all.js";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Footer from "./Footer";
import AOS from "aos";
import { useRouter } from "next/router";

function LandingPage() {
  const router = useRouter();

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
            interval={4000}
          >
            <div>
              <img
                className="h-screen bg-cover bg-center object-cover"
                loading="lazy"
                src="https://lh3.googleusercontent.com/fw2ADRPJw_34CUXpxBt9Z3sNbtrYOhSNd1TzW5EnMzDaEZlJIIMNkZunjxkJoqA9CzuL0u-SdgFrFtYiQpshgDlJi0ndDDFY7Pkl7opWq4mWzrVJnXe3i0jtrXAkVNMM0FZZc0ZI2TFxa2rjimBjXOfRuN3vtJBdWAytwMj7fhrLTiyuLN0TX3Ud6knGlxcR0DnL_cYEVARa6L5buVUrbh-EmQ9lDGAXXxdM6vNeBum8Z15VYgNKrGLo_nSuvwFFEzajbyubNUQsVzEAvl9ZnJME2WeOz5wpJ2RIRxZhaT3gI-KG4lRC2W0oaJ8vC2F4bQCgAC96Z_0cFxztWYJzpWfpgAq9eNtCOut_FJMP1eKgIXhhLvFMm7GdqOk4ZqkecNpFvh45zKW0v5ahCZuVbA4PTqApb_mELP-_V3sNelfHbqV4Y0CzZMJIfQAyLe596pXqzfInkXxnm04qm-kDSpw-HSTYsVyPCYXFRIS53EuLuhXr30oHBcIEH4MaAzsmqvvxWOZ0HeNwZFoR4CdWnbONASKvXfPAXcxnQ8Dpk6G2cSxhb2gyyG4usWre9kkg0jamnRxvJgqZ8jSxueN4A0hARRwU5ZxG9dj3LKanQFIoP7M6JSy84e5IE0oPxCbuS5zPXC2sddMZB4ZmjSCQVvVKzi0Ce5u8u8Fe3WJbz0wRrhZ4-RxuJOwPODGHGBE_eY13RXpIY-BrgZyPRSQNlYY=w732-h975-no?authuser=0"
                />

              <div className="w-full h-full flex flex-col absolute top-6   justify-center items-center">
                <h1 className="text-white font-bold text t headerText">
                  LUXURY CLOSET
                </h1>
                <br />
                <br />
                <br />
                
                  <button class="buttoooon" onClick={() => router.push('/Shop')}>SHOP NOW</button>

                
              </div>
            </div>

            <div className="">
              <img
                className="h-screen bg-cover bg-center object-cover	"
                loading="lazy"
                src="/img/landingpage/6.jpg"
              />

              <div className="w-full h-full flex flex-col absolute top-6  justify-center items-center">
                <h1 className="text-black t font-bold text landingpagetext">
                  LUXURY CLOSET
                </h1>
                <br />
                <br />
                <button class="buttoooon" onClick={() => router.push('/Shop')}>SHOP NOW</button>

              </div>
            </div>

            <div className="">
              <img
                className="h-screen bg-cover bg-center object-cover"
                loading="lazy"
                src="/img/landingpage/5.jpg"
              />
              <div className="w-full h-full flex flex-col absolute top-6   justify-center items-center">
                <h1 className="text-white t font-bold text landingpagetext">
                  LUXURY CLOSET
                </h1>
                <br />
                <button class="buttoooon" onClick={() => router.push('/Shop')}>SHOP NOW</button>

              </div>
            </div>

            <div className="">
              <img
                className="h-screen bg-cover bg-center object-cover"
                loading="lazy"
                src="/img/landingpage/8.jpg"
              />
              <div className="w-full h-full flex flex-col absolute top-6  justify-center items-center">
                <h1 className="text-white t font-bold text landingpagetext">
                  LUXURY CLOSET
                </h1>
                <br />
                <button class="buttoooon" onClick={() => router.push('/Shop')}>SHOP NOW</button>

              </div>
            </div>

            <div className="">
              <img
                className="h-screen bg-cover bg-center object-cover"
                loading="lazy"
                src="/img/landingpage/9.jpg"
              />
              <div className="w-full h-full flex flex-col absolute top-6   justify-center items-center">
                <h1 className="text-white t font-bold text landingpagetext">
                  LUXURY CLOSET
                </h1>
                <br />
                <button class="buttoooon" onClick={() => router.push('/Shop')}>SHOP NOW</button>

              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div></div>
      <br />
      <br />
      <br />

      <div class="container-fluid mb-14">
        <div class="row justify-content-center">
          <div class="col-12 col-md-4 col-sm-12 col-xs-12">
            <div class="card p-3 p-md-4 text-white">
              {" "}
              <span>
                <i class="fa fa-envelope-open-o fa-2x" aria-hidden="true"></i>
              </span>
              <h6 class="my-3 text-black text-center font-semibold">
                {" "}
                Subscribe to our newsletter{" "}
              </h6>
              <div class="row d-flex my-2 pr-2 pr-md-5 div1">
                <div class="col-9">
                  {" "}
                  <input
                    type="email"
                    class="form-control bg-white py-3"
                    id="inp1"
                    placeholder="Enter email address"
                  />{" "}
                </div>
                <div class="col-3 px-0">
                  {" "}
                  <button class="button send text-white px-4 py-2">
                    {" "}
                    Send{" "}
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
<Footer/>
      {/* <script src="/slider.js" type="text/javascript"></script> */}
    </div>
  );
}

export default LandingPage;
