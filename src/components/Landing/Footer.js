import React from "react";

import { Facebook, Twitter, Github, Linkedin } from "react-bootstrap-icons";

const Footer = () => (
  <footer className="pt-4 bg-dark text-light mt-5">
    <div className="container-fluid text-center">
      <div className="container">
        <div className="row">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <h5 className="text-uppercase">Links</h5>
        <ul className="list-unstyled">
          <Facebook size={30} style={{ margin: "10px" }} />
          <Twitter size={30} style={{ margin: "10px" }} />
          <Github size={30} style={{ margin: "10px" }} />
          <Linkedin size={30} style={{ margin: "10px" }} />
        </ul>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>
  </footer>
);

export default Footer;
