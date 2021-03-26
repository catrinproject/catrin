import React from "react";
import { useSelector } from 'react-redux';
import { history } from 'services/config';
import { Route } from "react-router-dom";


const AuthenticatedRoute = ({component : Component, ...props}) => {
    const appReducer = useSelector((store) => store.appReducer);
    if (appReducer.isAuthenticated){
        return <Route component={Component}{...props}/>;
    }
    history.push('/cica');    
    return null;
};

export default AuthenticatedRoute;