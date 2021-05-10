import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Container, Row } from "reactstrap";
import products from "../data/products";
import Product from "../components/Product";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="home-page-top">
        <div className="banner">
          <img src="../images/efamp banner 1.png" alt="banner" />
        </div>
        <Container className="banner-text">
          <h1>e-FAMP</h1>
          <p>A DIGITAL MARKET PLACE FOR ALL YOUR AGRICULTURAL NEEDS</p>
          <h2>FAST, RELIABLE AND CONVENIENT</h2>
        </Container>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel"
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#dedede",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block "
              style={{
                width: "800px",
              }}
              src="../images/efamp banner 3.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>24/7 Service</h3>
              <p>Always Open Marketplace No Closing Hours</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              style={{ width: "800px" }}
              src="../images/coffee1.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "white" }}>FOR EXPORT</h3>
              <p>All kinds of baverages market place</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              style={{ width: "800px" }}
              src="../images/efamp banner 2.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Convert Your Products to Cash</h3>
              <p style={{ color: "#000" }}>
                Marching potential sellers to potential buyers
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container>
        <h3 className="m-4 text-center">FRESH E-FAMP PRODUCTS</h3>
        <Row>
          {products.map((p, i) => (
            <Product name={p.name} price={p.price} img={p.img} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
