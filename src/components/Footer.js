import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer-content">
        <FontAwesomeIcon
          icon={["fab", "facebook"]}
          size="3x"
          className="icon"
        />
        <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" className="icon" />
        <FontAwesomeIcon icon={["fab", "google"]} size="3x" className="icon" />
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          size="3x"
          className="icon"
        />
      </div>
      <div className="copyright">
        <span>© 2020 Copyright:</span> Our-Erp
      </div>
    </section>
  );
}

export default Footer;
