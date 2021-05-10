import React from "react";
import { Container, Row } from "reactstrap";
import Product from "../components/Product";
import products from "../data/products";

const ProductListPage = () => {
  return (
    <Container>
      <h3 className="m-4 text-center">FRESH ORGANIC PRODUCTS</h3>
      <Row>
        {products.map((p, i) => (
          <Product name={p.name} price={p.price} img={p.img} />
        ))}
      </Row>
      <Row className="mt-3">
        {products.map((p, i) => (
          <Product name={p.name} price={p.price} img={p.img} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductListPage;
