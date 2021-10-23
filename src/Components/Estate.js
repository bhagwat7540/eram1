import React from "react";
import estate from "../estate.jpg";
import "./Estate.css";

function Estate() {
  return (
    <div>
      <div className="estate__left">
        <h1>REAL ESTATE</h1>
      </div>

      <div className="estate__right">
        <div className="estate__par">
          <p>
            Eram Capital partners with medium to large size private and public
            companies operating in the residential and commercial real estate
            sectors in United Kingdom, Europe and North America. Eram Capital
            develops opportunities and formulates partnerships with real estate
            developers and investors who wish to access strategic capital from
            investors. Eram Capital and its investors focus on the following
            areas:
          </p>

          <br />

          <div className="estate__box">
            <ul>
              <li>
                Residential, logistics, student housing, and commercial
                investments
              </li>
              <li>
                Pre- and post- construction development financing structures
              </li>
              <li>High-income oriented investment opportunities</li>
            </ul>
          </div>
        </div>

        <div className="estate__img">
          <img src={estate} alt=""></img>
        </div>
      </div>

      <div className="estate__bottom">
        <p>
          Eram Capital focuses on real estate projects and companies which are
          in key urban locations in the geographies we have unique access to. We
          and our investors believe in the global demographic and economic
          trends driving growth in the residential and commercial real estate
          sectors, largely governed by:
        </p>

        <br />

        <div className="estate__list">
          <ul>
            <li>
              Business globalization and the concentration in key locations
            </li>
            <li>Urbanization and general population growth</li>
            <li>Global growth in products and services logistics operations</li>
            <li>
              Increase in global capital allocation to the real estate asset
              class
            </li>
          </ul>
        </div>

        <br />

        <p>
          Eram Capital has unique access to strategic and financial investors
          globally who have an abundance of capital resources and understand the
          global demographic trends driving real estate markets in key global
          cities in the UK, Europe, and the USA. <br />
          <br /> Eram and its investor partners have a long history of Real
          Estate sector experience in key geographies around the world.
          <br />
          <br /> Eram and its investor partners can provide development capital,
          growth capital for real estate projects and can facilitate strategic
          investing partnerships to attract pipeline opportunities in identified
          sub-sectors.
        </p>
      </div>
    </div>
  );
}

export default Estate;
