import React from "react";
import energy from "../energy.jpg";
import "./Energy.css";

function Energy() {
  return (
    <div>
      <div className="energy__left">
        <h1>Energy</h1>
      </div>

      <div className="energy__right">
        <div className="energy__par">
          <p>
            Eram Capital partners with small to medium size private and public
            enterprises operating in the Conventional and Renewable energy
            sectors in South America, Europe, Africa, and South Asia. Eram
            develops opportunities for partnership and investment with companies
            who have expertise and growth prospects in the following industries:
          </p>

          <div className="energy__box">
            <ul>
              <li>
                Energy production:
                <ul>
                  <li>Gas and coal fired-power plants</li>
                  <li>Solar, wind, and biomass power plants</li>
                  <li>
                    Alternative energy production through chemical processes
                  </li>
                </ul>
              </li>
              <li>
                Energy exploration:
                <ul>
                  <li>Conventional and unconventional gas and oil projects</li>
                  <li>Innovative exploration technologies</li>
                </ul>
              </li>
              <li>
                Energy storage and logistics:
                <ul>
                  <li>New technologies in bulk storage</li>
                  <li>Transportation infrastructure</li>
                </ul>
              </li>
              <li>
                Energy downstream:
                <ul>
                  <li>Petrochemicals</li>
                  <li>Derivative fuel oils</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="energy__img">
          <img src={energy} alt=""></img>
        </div>
      </div>

      <div className="energy__bottom">
        <p>
          The global economy is undergoing a significant transformation in the
          trend toward new technologies in Conventional Energy and the rapid
          adoption of Renewable Energy production techniques. Eram Capital and
          our investor partners believe in the profound demographic factors
          driving growth in the global Energy sector. Some of the key factors
          are:
        </p>
        <br />

        <div className="energy__list">
          <ul>
            <li>
              Rapid population growth in the developing world putting pressure
              on energy resources
            </li>
            <li>
              Increased global productivity in the developed world demanding
              greater energy production efficiency and longevity
            </li>
            <li>
              Governmental policies restricting conventional production and
              promoting unconventional and renewable production
            </li>
          </ul>
        </div>

        <br />

        <p>
          Eram Capital has unique access to strategic and financial investors
          globally who have an abundance of capital resources and understand the
          global demographic trends driving the Conventional and Renewable
          Energy sectors.
          <br />
          <br />
          Eram Capital and its investor partners have a long history of energy
          sector experience in key geographies around the world.
          <br />
          <br />
          Eram Capital and its investor partners can provide development
          capital, growth capital for companies and projects for foreign
          expansion and can facilitate commercial partnerships globally.
        </p>
      </div>
    </div>
  );
}

export default Energy;
