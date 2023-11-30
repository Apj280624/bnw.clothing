import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer container-fluid">
          <p className="footer-heading">Important links</p>

          <Link to="#" className="footer-tab">
            Interview Experiences
          </Link>

          <p className="copyright-tab">XXXXXXX © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
