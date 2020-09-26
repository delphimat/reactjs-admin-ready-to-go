import React from "react";

import { connect }  from "react-redux";

import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/cjs/Button";

import { LinkContainer } from 'react-router-bootstrap';

import { tooggleConnectUser } from "../../redux/user/user.action";

import './login.styles.css'

const LoginPage = (props) => {


    const { toggleUser } = props;

    console.log(toggleUser);

    const today  = new Date();

    return (
        <Form className="form-signin">
            <LinkContainer to="/">
            <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
                 width="72" height="72"/>
            </LinkContainer>

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

            {/*<LinkContainer to="/backend">*/}
                <Button onClick={toggleUser}  className="btn btn-lg btn-primary btn-block" type="submit">Sign in</Button>
            {/*</LinkContainer>*/}
            <p className="mt-5 mb-3 text-muted">&copy; {today.getFullYear()}</p>
        </Form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleUser: () => dispatch(tooggleConnectUser())
});

export default connect(null, mapDispatchToProps)(LoginPage);