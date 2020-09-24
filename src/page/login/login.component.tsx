import React from "react";

import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/cjs/Button";

import './login.styles.css'

const LoginPage = () => {

    const today  = new Date();

    return (
        <Form className="form-signin">
            <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
                 width="72" height="72"/>

            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

            <Form.Group>
                <Form.Control type="email" id="inputEmail"  placeholder="Email address" required autoFocus />
            </Form.Group>

            <Form.Group>
                <Form.Control type="password" id="inputPassword"  placeholder="Password" required />
            </Form.Group>

            <div className="checkbox mb-3">
                <label>
                    <Form.Check label="Remember me" />
                </label>
            </div>

            <Button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</Button>

            <p className="mt-5 mb-3 text-muted">&copy; {today.getFullYear()}</p>
        </Form>
    )
}

export default LoginPage;