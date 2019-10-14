import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const {authenticated} = useContext(LoginContext)
    return (
        <Route
            {...rest}
            render={props =>
                authenticated === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default PrivateRoute;
