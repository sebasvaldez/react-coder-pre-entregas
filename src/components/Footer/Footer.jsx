import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase link mb-2">Pre-entregas curso React</h5>
            
          </div>

          <hr className="clearfix w-100 d-md-none py-0 mt-2 " />

        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2023 Copyright:
        <Link to="https://github.com/sebasvaldez" className="link"> Marcelo Sebastián Valdez</Link>
      </div>
    </footer>
  );
};

export default Footer;
