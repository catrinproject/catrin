import Layout from 'components/Layout/Layout';
import React, { useState, useEffect } from 'react';
import { Input, Button, notification } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'actions/authActions';
import { history } from 'services/config';

const LoginPage = () => {

    const dispatch = useDispatch();
    const authReducer = useSelector((store) => store.authReducer);

    useEffect(() => {
        if (authReducer.isError) {
            notification.error({
                message: 'Login error',
                description:
                  authReducer.error,
                placement: 'bottomRight',
                duration: 2,
              });
        }
    },[authReducer.isError]);

    useEffect(() => {
        if (authReducer.isAuthenticated) {
            history.push("/")
        }
    },[authReducer.isAuthenticated]);

    const [inputs, setInputs] = useState({
        email: undefined,
        password: undefined,
    });

    const handleLogin = () => {
        dispatch(login(inputs));
    }
    
    const handleInputChange = (e, key) => {
        setInputs({
            ...inputs,
            [key]: e.target.value,
        });
    }

    console.log(inputs);

    return (
        <Layout>
            <Input size="large" placeholder="e-mail" onChange={(e) => handleInputChange(e, "email")} prefix={<UserOutlined />} />
            <Input.Password size="large" placeholder="password" onChange={(e) => handleInputChange(e, "password")} prefix={<KeyOutlined />} />
            <Button type="primary" onClick={handleLogin}>
                Login
            </Button>
            {
                authReducer.isError ? <div>{authReducer.error}</div> : null
            }
        </Layout>
    );


};

export default LoginPage;