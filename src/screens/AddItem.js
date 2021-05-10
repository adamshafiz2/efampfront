import React from "react";
import { Form, Container, Button } from "react-bootstrap";

function AddItem() {
  return (
    <Container>
      <Form>
        <Form.Control placeholder="enter name of product "></Form.Control>
        <Form.Control placeholder="upload image "></Form.Control>
        <form action="/action_page.php">
          <select name="cars" class="custom-select mb-3">
            <option selected>SELECT CATEGORY</option>
            <option value="1">CERIALS</option>
            <option value="2">FRUITS</option>
            <option value="3">VEGETABLES</option>
            <option value="4">OILS</option>
            <option value="5">MEAT</option>
            <option value="6">MILK</option>
            <option value="7">FUNGI</option>
            <option value="8">EGGS</option>
            <option value="9">FARM INPUTS</option>
            <option value="10">ORNAMENTALS</option>
            <option value="11">FARM EQUIPMENTS</option>
            <option value="11">ROOTS AND TUBERS</option>
          </select>
        </form>
        <Form.Control placeholder="enter product description "></Form.Control>
        <Form.Control placeholder="enter price "></Form.Control>
        <Button>SAVE</Button>
      </Form>
    </Container>
  );
}

export default AddItem;
