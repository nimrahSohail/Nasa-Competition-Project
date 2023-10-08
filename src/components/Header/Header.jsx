import React from "react";
import turtle from "../../assets/turtle.png";
import SubHeading from "../SubHeading/SubHeading";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
  
      <div className="app__wrapper_info">
        <SubHeading title="Together We Can Do It" />
        <h1 className="app__header_h1">Protect The Oceans</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Dive into a world of marine wonder. Join us in safeguarding the
          oceans, protecting marine life, and preserving the beauty of our
          underwater ecosystems. Together, we make waves for a
          sustainable future
        </p>
      </div>
  
    <div className="app__wrapper_img">
      <img src={turtle} />
    </div>
  </div>
);

export default Header;
