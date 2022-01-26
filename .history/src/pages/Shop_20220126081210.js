import Header from "../components/Header";

function Shop() {
  return (
    <div>
      <Header />
      <a
        href="https://youtu.be/WuE_w_sLTSY"
        target="_blank"
        data-keyframers-credit
        style="color: #FFF"
      ></a>

      <nav class="bar-navigation">
        <ul class="nav-list" style="--total: 4;">
          <li
            class="nav-item"
            tabindex="1"
          ></li>
          <li
            class="nav-item"
            tabindex="2"
          ></li>
          <li
            class="nav-item"
            tabindex="3"
          ></li>
          <li
            class="nav-item"
            tabindex="4"
          ></li>
        </ul>
      </nav>
    </div>
  );
}

export default Shop;
