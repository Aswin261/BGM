import React from "react";
import "./navbar.css";
const NavBar = () => {
  return (
    <div>
      <div className="navbar_Container">
        <div>
          <div item xs={2}>
            {" "}
          </div>
          <div class="logo">
            <img
              className="navbar_logo"
              width="90px"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt=""
            />
            <br />
            <a href="#plus" id="icon-link">
              <i>
                Explore{" "}
                <span>
                  {" "}
                  Plus{" "}
                  <i
                    class="fa-solid fa-plus fa-sm"
                    style={{ color: "#ffd700" }}
                  ></i>
                </span>
              </i>
            </a>
          </div>
          <div className="search">
            <input
              text="text"
              className="navbar__searchBar"
              placeholder="Search for products, brands, and more"
            />
            <i
              class="fa-solid fa-magnifying-glass fa-lg"
              style={{ color: "#107bf6" }}
            ></i>
          </div>
          <div className="nav-comp">
            <p>Aswin</p>

            <p>Become a Seller</p>
            <p>More</p>
            {/* <ul class="more">
              <li>
                <i class="fa-solid fa-bell" style={{ color: "#107bf6" }}></i>
                Notification Preferences
              </li>
              <li>
                <i
                  class="fa-solid fa-message-question"
                  style={{ color: "#107bf6" }}
                ></i>
                24x7 Customer Care
              </li>
              <li>
                <i
                  class="fa-solid fa-arrow-trend-up"
                  style={{ color: "#107bf6" }}
                ></i>
                Advertise
              </li>
              <li>
                <i
                  class="fa-sharp fa-solid fa-down-to-line"
                  style={{ color: "#107bf6" }}
                ></i>
                Download App
              </li>
            </ul> */}
            <p>
              <i
                class="fa-solid fa-cart-shopping fa-lg"
                style={{ color: "#fafafa" }}
              ></i>
              <span style={{ marginLeft: "5px" }}>Cart</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
