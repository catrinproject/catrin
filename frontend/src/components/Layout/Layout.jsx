import React from "react";
import { Layout as ANTlayout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "actions/authActions";
import '../../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCircle, faCircleNotch, faCopyright, faDotCircle, faDumbbell, faHeart, faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import './Layout.css';

const { Header, Content, Footer } = ANTlayout;

function Layout(props) {
    const authReducer = useSelector((store) => store.authReducer);
    const dispatch = useDispatch();
  return (
    <ANTlayout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        {
            authReducer.token ? (
                <>
                    <Menu.Item key="1">
                      <Link to="/">catrin</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/new-workout">New workout</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/my-workouts">My workouts</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Link to="/statistics">Statistics</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <Link Link to="/mi-band">Mi Band</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                      <Link to="/profile">Profile</Link>
                    </Menu.Item>
                      <Menu.Item key="7" onClick={()=>{dispatch(logout())}}>
                        Logout
                    </Menu.Item>
                </>
            ) : (
                <>
                    <Menu.Item key="1">
                      <Link to="/">catrin</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/register">Register</Link>
                    </Menu.Item>
                </>
            )
        }

        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        catrin ©2021 Created by Bence Ambrus
      </Footer>
    </ANTlayout>
  );
}

export default Layout;
