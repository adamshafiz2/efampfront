import React from "react";
import { Card, CardBody, CardImg, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Product = ({ name, img, price }) => {
  return (
    <Col lg={3} md={6} sm={12}>
      <Card>
        <Link to={`/details/${name}`} className="nav-link">
          <CardImg src={img} style={{ maxHeight: 150, minHeight: 150 }} />
          <CardBody>
            {name} -<span className="text-primary">GH₵{price}.00</span>
          </CardBody>
        </Link>
      </Card>
    </Col>
  );
};

export default Product;
