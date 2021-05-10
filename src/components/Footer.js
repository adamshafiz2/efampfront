import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer bg-dark mt-5 text-white p-5">
      <Container>
        <Row>
          <Col>
            <Link to="#" className="nav-link text-white">
              e-FAMP local market
            </Link>
            <Link to="#" className="nav-link text-white">
              Copyright &copy; 2021
            </Link>
          </Col>
          <Col>
            <Link to="#" className="nav-link text-white">
              Terms and Conditions
            </Link>
            <Link to="#" className="nav-link text-white">
              <a href="mailto:adamshafiz2@gmail.com">adamshafiz2@gmail.com</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
