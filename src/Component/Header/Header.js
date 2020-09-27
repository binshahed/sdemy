import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <nav className="d-flex align-items-center fixed">
        <a href="">
          {" "}
          <img src={props.logo} alt="" />
        </a>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="">
          <p>Categories</p>
        </a>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="">
          {" "}
          <p>Jdemy for business</p>
        </a>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="">
          <p>Teach on Jdemy</p>
        </a>
        <input
          class="search-box"
          type="text"
          placeholder="Search Your Course"
        />
      </nav>
    </div>
  );
};

export default Header;
