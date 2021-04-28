import React from "react";
import { useSelector } from 'react-redux';
import { history } from 'services/config';
import { Route } from "react-router-dom";


const AuthenticatedRoute = ({component : Component, ...props}) => {
    const authReducer = useSelector((store) => store.authReducer);
    if (authReducer.token) {
        return <Route component={Component}{...props}/>;
    }
    history.push('/login');    
    return null;
};

export default AuthenticatedRoute;