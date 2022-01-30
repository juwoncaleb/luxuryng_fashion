import { useRouter } from "next/router";


function Footer() {
    const router = useRouter();

    return (
        <div>
          
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
            <p onClick={() => router.push('/About')}>
              <a>About us</a>
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
<<<<<<< HEAD
            <p>LAGOS NIGERIA</p>
=======
            <p>LAGOS NIGERU</p>
>>>>>>> c14a0ab7f85597a08937fcc2b7760df8d467ee1b
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
    )
}

export default Footer
