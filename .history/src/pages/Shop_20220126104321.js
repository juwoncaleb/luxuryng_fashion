import Header from "../components/Header";
import { useRouter } from "next/router";

function Shop() {
  const router = useRouter();

  return (
    <div>
      <Header />

      <div class="gallery">
        <div  class="gallery__column">
          <a 
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="/img/l2.jpg"
                alt="Portrait by Jessica Felicio"
                class="gallery__image"
              />
              <figcaption class="gallery__caption" id="img1">
                  Tops
              </figcaption>
            </figure>
          </a>

          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="/img/l3.jpg"
                alt="Portrait by Oladimeji Odunsi"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
Sweater 
              </figcaption>
            </figure>
          </a>

          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
              className="noah"
                src="/img/l4.jpg"
                alt="Portrait by Alex Perez"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
BAGS              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb" >
              <img className="noah"
                src="/img/l5.jpg"
                alt="Portrait by Noah Buscher"
                class="gallery__image"
              />
              <figcaption class="gallery__caption" id="img2">
Watches              </figcaption>
            </figure>
          </a>

          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="/img/l6.jpg"
                alt="Portrait by Ivana Cajina"
                class="gallery__image"
              />
              <figcaption class="gallery__caption" id="ivan">
                Portrait by Ivana Cajina
              </figcaption>
            </figure>
          </a>

          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
              className="noah"
                src="/img/l7.jpg"
                alt="Portrait by Sam Burriss"
                class="gallery__image"
              />
              <figcaption class="gallery__caption" id="img4">
KAKI              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="/img/l8.jpg"
                alt="Portrait by Mari Lezhava"
                class="gallery__image"
              />
              <figcaption class="gallery__caption" id="briefs">
Briefs         
     </figcaption>
            </figure>
          </a>

          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
              className="noah"
                src="/img/l9.jpg"
                alt="Portrait by Ethan Haddox"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Ethan Haddox
              </figcaption>
            </figure>
          </a>

          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
              className="noahh"
                src="/img/l10.jpg"
                alt="Portrait by Amir Geshani"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
            Tops
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="/img/l11.jpg"
                alt="Portrait by Guilian Fremaux"
                class="gallery__image"
              />
              <figcaption class="gallery__caption" id="im9">
                Portrait by Guilian Fremaux
              </figcaption>
            </figure>
          </a>

          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
              className="noah"
                src="/img/caps/vondutch/von5.png"
                alt="Portrait by Jasmin Chew"
                class="gallery__image"
              />
              <figcaption class="gallery__caption" >
CAP              </figcaption>
            </figure>
          </a>

          <a
            onClick={() => router.push("/Shirt")}
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
              className="noah"
                src="/img/travis/rott.png"
                alt="Portrait by Dima DallAcqua"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
JACKET              </figcaption>
            </figure>
          </a>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
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