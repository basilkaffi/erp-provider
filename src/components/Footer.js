import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer-content">
        <FontAwesomeIcon icon={["fab", "facebook"]} size="4x" />
        <FontAwesomeIcon icon={["fab", "twitter"]} size="4x" />
        <FontAwesomeIcon icon={["fab", "google"]} size="4x" />
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="4x" />
      </div>
      <div className="copyright">
        <span>© 2020 Copyright:</span> Our Erp
      </div>
    </section>
  );
}

export default Footer;
