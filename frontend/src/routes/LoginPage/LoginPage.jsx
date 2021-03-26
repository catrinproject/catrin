import React, { useState, useEffect } from 'react';
import { Input, Button, Spin, notification } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'actions/appActions';

const LoginPage = () => {

    const dispatch = useDispatch();
    const appReducer = useSelector((store) => store.appReducer);

    useEffect(() => {
        if (appReducer.isError) {
            notification.error({
                message: 'Login error',
                description:
                  appReducer.error,
                placement: 'bottomRight',
                duration: 2,
              });
        }
    },[appReducer.isError]);

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
        <div>
            <Input size="large" placeholder="e-mail" onChange={(e) => handleInputChange(e, "email")} prefix={<UserOutlined />} />
            <Input.Password size="large" placeholder="password" onChange={(e) => handleInputChange(e, "password")} prefix={<KeyOutlined />} />
            <Button type="primary" onClick={handleLogin}>
                {appReducer.loginLoading ? <Spin/> : null }
                Login
            </Button>
            {
                appReducer.isError ? <div>{appReducer.error}</div> : null
            }
        </div>
    );


};

export default LoginPage;