import Layout from "components/Layout/Layout";
import React, { Fragment, useState, useEffect } from 'react';
import { Input, Button, notification } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from 'actions/alertActions';
import { register } from 'actions/authActions';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isError, error } = useSelector((store) => store.authReducer);  
  
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      password2: ''
    });
  
    const [inputs, setInputs] = useState({
      name: '',
      email: '',
      password: '',
      password2: ''
   });

    const { name, email, password, password2 } = inputs;
   
    const handleRegister = (e) => {
      e.preventDefault();
      if (password !== password2) {
        dispatch(setAlert('Passwords do not match', 'danger'));
      } else {
      dispatch(register(inputs));
      }
    }

    const handleInputChange = (e, key) => {
      setInputs({
          ...inputs,
          [key]: e.target.value,
      });
    }

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = async (e) => {
      e.preventDefault();
      if (password !== password2) {
        dispatch(setAlert('Passwords do not match', 'danger'));
      } else {
        dispatch(register({ name, email, password }));
      }
    };
  
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

  return (
    <Layout>
      <Fragment className="site-layout-content">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>

      <Input size="large" placeholder="name" onChange={(e) => handleInputChange(e, "name")} prefix={<UserOutlined />} />
      <Input size="large" placeholder="e-mail" onChange={(e) => handleInputChange(e, "email")} prefix={<UserOutlined />} />
      <Input.Password size="large" placeholder="password" onChange={(e) => handleInputChange(e, "password")} prefix={<KeyOutlined />} />
      <Input.Password size="large" placeholder="password again" onChange={(e) => handleInputChange(e, "password2")} prefix={<KeyOutlined />} />
      <Button type="primary" onClick={handleRegister}>
          Register
      </Button>
      {
          isError ? <div>{error}</div> : null
      }
      
      
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
    </Layout>
  ); 
}

  export default RegisterPage;


