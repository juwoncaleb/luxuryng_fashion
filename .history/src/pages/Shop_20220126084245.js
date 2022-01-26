import Header from "../components/Header";

function Shop() {
  return (
    <div>
      <Header />

      <div class="gallery">
        <div class="gallery__column">
          <a
            href="https://unsplash.com/@jeka_fe"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="/img/l2.jpg"
                alt="Portrait by Jessica Felicio"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Jessica Felicio
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@oladimeg"
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
                Portrait by Oladimeji Odunsi
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@a2eorigins"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/VLPLo-GtrIE/300x300"
                alt="Portrait by Alex Perez"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Alex Perez
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a
            href="https://unsplash.com/@noahbuscher"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/AR7aumwKr2s/300x300"
                alt="Portrait by Noah Buscher"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Noah Buscher
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@von_co"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/dnL6ZIpht2s/300x300"
                alt="Portrait by Ivana Cajina"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Ivana Cajina
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@samburriss"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/tV_1sC603zA/300x500"
                alt="Portrait by Sam Burriss"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Sam Burriss
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a
            href="https://unsplash.com/@marilezhava"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/Xm9-vA_bhm0/300x500"
                alt="Portrait by Mari Lezhava"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Mari Lezhava
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@ethanhaddox"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/NTjSR3zYpsY/300x300"
                alt="Portrait by Ethan Haddox"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Ethan Haddox
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@mr_geshani"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/2JH8d3ChNec/300x300"
                alt="Portrait by Amir Geshani"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Amir Geshani
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a
            href="https://unsplash.com/@frxgui"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/FQhLLehm4dk/300x300"
                alt="Portrait by Guilian Fremaux"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Guilian Fremaux
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@majestical_jasmin"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/OQd9zONSx7s/300x300"
                alt="Portrait by Jasmin Chew"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Jasmin Chew
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@dimadallacqua"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/XZkEhowjx8k/300x500"
                alt="Portrait by Dima DallAcqua"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Dima DallAcqua
              </figcaption>
            </figure>
          </a>
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
