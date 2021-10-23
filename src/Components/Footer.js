import React from "react";
import ERAM from "../ERAM-CAPITAL.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__main">
      <div className="footer__sub">
        <div className="footer__first">
          <img src={ERAM} alt=""></img>
          <p>
            <i class="fas fa-map-marked-alt"></i>International,52 Rue D'Anvers,
            L-1130, Luxembourg
          </p>
          <p>info@eramcapitallux.com</p>
          <p>Eram Capital Advisors © 2021. All rights reserved.</p>
        </div>

        <div className="footer__second">
          <h3>About Us</h3>
          <br />
          <p>
            Eram Capital is an investment advisory company with global reach
            focusing on special situations opportunities. Eram brings to its
            clients and partners unique investment advisory expertise across
            sectors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
