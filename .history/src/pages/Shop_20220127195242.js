import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";

function Shop() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <h1 className="text t text-2xl text-center font-bold  md:font-extrabold	"> SALES : EXTRA 20% OFF </h1>
      <br/>
      <h1 className="text t text-2xl text-center font-bold  md:font-extrabold	">(ALREADY UP TO 80% OFF)</h1>
      <div class="container mt-10" >
        <div class="item">
          <img onClick={() => router.push('/Hoodie')}
                src="/img/l7.jpg"
                alt="unsplash"
          />
          <h4 className="text-center t font-bold 	" >KAKI</h4>
        </div>
        <div class="item">
          <img onClick={() => router.push('/Jacket')}
                src="/img/model.png"
                alt="unsplash"
          />
          <h4 className="text-center t font-bold	" >GYM WEAR</h4>
        </div>
        <div class="item">
          <img onClick={() => router.push('/Shoe')}
                src="/img/l10.jpg"
                alt="unsplash"
          />
          <h4 className="text-center t	 font-bold">TOPS</h4>
        </div>
        <div class="item">
          <img onClick={() => router.push('/Short')}
src="/img/l2.jpg"            alt="unsplash"
          />
          <h4  className="text-center t	 font-bold">ACCESSORIES</h4>
        </div>
        <div class="item">
          <img onClick={() => router.push('/SweatShirt')}
                src="/img/l3.jpg"
                alt="unsplash"
          />
          <h4 className="text-center t font-bold	">SWEATER</h4>
        </div>
        <div class="item">
          <img onClick={() => router.push('/Jacket')}
                src="/img/l4.jpg"
                alt="unsplash"
          />
          <h4 className="text-center t font-bold	">BAGS</h4>
        </div>
        <div class="item">
        <img onClick={() => router.push('/Jacket')}
                src="/img/l9.jpg"
                alt="unsplash"
          />
          <h4 className="text-center t font-bold	">SHOES</h4>
        </div>
        <div class="item">
          <img
                src="/img/l6.jpg"
                alt="unsplash"
          />
          <h4 className="text-center t font-bold	"> JERSEY</h4>
        </div>
      </div>
      
      
      <div class="footer">
        <div class="content">
          <div class="social-media">
            <h4 className="font-semibold">Social</h4>

            <p>
              <a href="https://twitter.com/Sanket46171296">
                <i class="fab fa-twitter"></i> <br />
              </a>
            </p>

            <p>
              <a href="https://www.instagram.com/luxuryclosetng/">
                <i class="fab fa-instagram"> </i> <br />
              </a>
            </p>
          </div>
          <div class="links">
            <h4 className="font-semibold">Quick links</h4>
            <p>
              <a href="#">About us</a>
            </p>
            <p>
              <a href="#">Terms Of Service</a>
            </p>
            <p>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
              <a href="#">Return Policy</a>
            </p>
            <p>
              <a href="#">FAQ</a>
            </p>
          </div>
          <div class="details">
            <h4 class="address font-semibold">Address</h4>
            <p>LAGOS ISLAND</p>
            <h4 class="mobile">Mobile</h4>
            <p>
              <a href="http://wa.me/+2348162353857">+9112233445</a>
            </p>
            <h4 class="mail">Email</h4>
            <p>
              <a href="Calebomojuwon@gmail.com">abcdef@gmail.com</a>
            </p>
          </div>
        </div>
        <footer>
          <hr />
          2021 ABCDEF Technologies Pvt. Ltd.
        </footer>
      </div>
    </div>
  );
}

export default Shop;
