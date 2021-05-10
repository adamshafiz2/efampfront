import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { UserContext } from "../contexts/UsersContext";
import { useLocation, useHistory, Link } from "react-router-dom";

const LoginScreen = () => {
  const { loginUser, user } = useContext(UserContext);
  let location = useLocation();
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (user.token) {
      history.push(redirect);
    }
  }, [history, user, redirect]);

  function handleSubmit(e) {
    e.preventDefault();
    const loginuser = {
      email,
      password,
    };

    loginUser(loginuser);
  }

  return (
    <div>
      <div className="login-container">
        <div className="login-img">
          <img src="../images/farmer2.png" alt="" />
          <h3 className="mt-5">
            Sign in into you account to have access to premium features <br />{" "}
            Lets go trading!!!
          </h3>
        </div>
        <Button
          className="login-button"
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
          OPEN SIGN IN FORM
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              SIGN IN
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                height: "60vh",
                width: "100%",
                display: "grid",
                gridTemplateColumns: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Form
                onSubmit={handleSubmit}
                className="forminp"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  justifyContent: "center",
                  alignSelf: "center",
                  gridGap: 20,
                  padding: "20px",
                  border: "1px solid #36cfc9",
                }}
              >
                <h1 className="text-center">LOG IN</h1>
                <Form.Control
                  placeholder="enter email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control
                  placeholder="enter password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">LOGIN</Button>
              </Form>
            </div>
            <div>
              <p>
                Don't have an account?, click <Link to="/register">Here</Link>{" "}
                to register now
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default LoginScreen;
