import React from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Login(props) {
  const enter = props.match.params.enter;
  const history = useHistory();
  const gotoHome = () => {
    history.push("/");
  };

  return (
    <div className="enter">
      <div className="description"></div>
      <div>
        <Form className="form-container">
          <h2>{enter && enter.toUpperCase()}</h2>
          <Form.Group className="form">
            {enter === "register" ? (
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            ) : null}
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="button-container">
              {enter === "register" ? (
                <div className="enter-btn" onClick={gotoHome}>
                  REGISTER
                </div>
              ) : (
                <div className="enter-btn" onClick={gotoHome}>
                  LOGIN
                </div>
              )}
              <div className="back-btn" onClick={gotoHome}>
                BACK
              </div>
            </Form.Group>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Login;
