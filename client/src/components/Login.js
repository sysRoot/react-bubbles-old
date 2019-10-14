import React, { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../Contexts/LoginContext";
import { Redirect } from "react-router-dom";
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from "semantic-ui-react";

const Login = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);
    const { authenticated, authenticatedToggle } = useContext(LoginContext);

    const userPassObject = { username, password };
    console.log(props, props.history);
    const login = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", userPassObject)
            .then(response => {
                console.log(response);
                localStorage.setItem("token", response.data.payload);
                setIsLoggedIn(true);
                authenticatedToggle(isLoggedIn);
                props.history.push("./bubbles");
            })
            .catch(error => console.log(error));
    };

    const changeHandler = e => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    };
    return (
        <>
            {isLoggedIn ? (
                <>
                    <p>"Loading"</p>
                    <Redirect to="./bubbles" />{" "}
                </>
            ) : (
                <Grid
                    textAlign="center"
                    style={{ height: "100vh" }}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color="red" textAlign="center">
                            Log-in to your account
                        </Header>
                        <Form size="large" onSubmit={e => login(e)}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={changeHandler}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={changeHandler}
                                />

                                <Button
                                    color="red"
                                    fluid
                                    size="large"
                                    onSubmit={e => login(e)}
                                >
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            )}
        </>
    );
};

export default Login;
