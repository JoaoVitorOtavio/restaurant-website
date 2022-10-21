import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Donec a massa ipsum. Curabitur et erat sed lectus tempus egestas.
            Donec finibus, enim eu pellentesque cursus, velit enim ullamcorper
            justo, vitae efficitur purus turpis efficitur nulla.
          </p>
        </div>
        <p className="p__opensans">
          In ullamcorper porta mollis. Curabitur ornare eu urna non sodales.
          Mauris bibendum, enim vitae maximus consequat, risus nulla ultricies
          leo, eu feugiat metus justo ut tellus. Pellentesque hendrerit quam
          dui, sit amet facilisis metus rhoncus sed. Pellentesque mattis turpis
          at fermentum mattis.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef And Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
