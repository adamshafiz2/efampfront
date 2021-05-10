import React, { useState, useContext } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { FiLock, FiMessageSquare, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UsersContext";

const RegisterUserScreen = () => {
  const { registerUser } = useContext(UserContext);
  const [show, setShow] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newuser = {
      name,
      email,
      password,
    };
    registerUser(newuser);
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setShow(true)}
        style={{
          "--color-1": "deepskyblue",
          "--color-2": "#22eaaa",
          background: `
      linear-gradient(
        170deg,
        var(--color-1),
        var(--color-2) 80%
      )
    `,
        }}
      >
        OPEN SIGN UP FORM
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="Sing up"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Sign up title">SIGN UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-md-center" style={{ color: "#000" }}>
            <Col
              xs={12}
              sm={12}
              md={10}
              lg={10}
              className="justify-center border border-green mt-1 p-1"
            >
              <Form onSubmit={handleSubmit} className="forminp">
                <FormGroup>
                  <Form.Label>
                    Name <FiUser />{" "}
                  </Form.Label>
                  <FormControl
                    placeholder="enter name"
                    value={name}
                    onChange={(text) => setName(text.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Label>
                    Email <FiMessageSquare />
                  </Form.Label>
                  <FormControl
                    placeholder="enter email"
                    value={email}
                    onChange={(text) => setEmail(text.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Label>
                    Password <FiLock />
                  </Form.Label>
                  <FormControl
                    placeholder="enter password"
                    value={password}
                    onChange={(text) => setPassword(text.target.value)}
                  />
                </FormGroup>
                <Button type="submit">SIGN UP</Button>
              </Form>
            </Col>
          </Row>
          <div style={{ justifyContent: "space-between" }}>
            <p>
              Already have an account?, click
              <Link to="/login"> Here </Link>
              to Sign in now!
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterUserScreen;
