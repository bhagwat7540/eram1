import React from "react";
import agriculture from "../agriculture.jpg";

import "./Agriculture.css";

export default function Agriculture() {
  return (
    <div>
      <div className="agriculture__left">
        <h1>Agriculture</h1>
      </div>

      <div className="agriculture__right">
        <div className="agriculture__par">
          <p>
            Eram Capital partners with small to medium size private and public
            companies operating in the agricultural sector in South America,
            North America, Africa, Europe, and South Asia. Eram develops
            opportunities for partnership and investment with companies who have
            expertise and growth prospects in the following industries:
          </p>

          <div className="agriculture__box">
            <ul>
              <li>Dairy and milk products</li>
              <li>Industrial grains: wheat, barley, etc</li>
              <li>Poultry, beef, and fish farm operations</li>
              <li>Forestry operations</li>
              <li>Agrochemicals, equipment, and logistics</li>
            </ul>
          </div>
        </div>

        <div className="agriculture__img">
          <img src={agriculture} alt=""></img>
        </div>
      </div>

      <div className="agriculture__bottom">
        <p>
          Eram believes in the global trend toward greater investment in the
          agricultural sector for financial and strategic reasons. Our investor
          partners believe in the global demographic factors stimulating this
          growth, governed largely by:
        </p>
        <br />

        <div className="agriculture__list">
          <ul>
            <li>
              Increased energy and water resource demand for non-agricultural
              activities which is restraining supply in the agricultural sector.
            </li>
            <li>
              Decrease in land available for certain large-scale agricultural
              activities due to population growth, land prices for real estate
              development, and government restrictions.
            </li>
            <li>
              Increase in food and basic materials consumption driven by global
              economic growth and global population growth in developed and
              developing countries.
            </li>
          </ul>
        </div>

        <br />

        <p>
          Eram Capital has unique access to strategic and financial investors
          globally who have an abundance of capital resources and understand the
          global demographic trends driving the agricultural sector.
          <br />
          <br />
          Eram and its investor partners have a long history of agricultural
          sector experience in key geographies around the world.
          <br />
          <br />
          Eram and its investor partners can provide development capital, growth
          capital for companies and projects for foreign expansion and can
          facilitate commercial partnerships in the MENA region.
        </p>
      </div>
    </div>
  );
}
