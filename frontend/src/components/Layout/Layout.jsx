import React from "react";
import { Layout as ANTlayout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "actions/authActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../fontawesome';
import { faCuttlefish } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen, faCapsules, faDumbbell, faEdit, faSignInAlt, faSignOutAlt, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
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
                      <Link to="/"><FontAwesomeIcon icon={faCuttlefish} size="lg" />:  {authReducer.user ? authReducer.user.name : ''}</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/new-workout"><FontAwesomeIcon icon={faEdit}/> New workout</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/my-workouts"><FontAwesomeIcon icon={faDumbbell}/> My workouts</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Link to="/statistics"><FontAwesomeIcon icon={faBookOpen}/> Statistics</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <Link Link to="/mi-band"><FontAwesomeIcon icon={faCapsules}/> Mi Band</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                      <Link to="/profile"><FontAwesomeIcon icon={faUser}/> Profile</Link>
                    </Menu.Item>
                      <Menu.Item key="7" onClick={()=>{dispatch(logout())}}>
                      <FontAwesomeIcon icon={faSignOutAlt}/> Logout
                    </Menu.Item>
                    
                </>
            ) : (
                <>
                    <Menu.Item key="1">
                      <Link to="/"><FontAwesomeIcon icon={faCuttlefish} size="lg" /> catrin</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/login"><FontAwesomeIcon icon={faSignInAlt}/> Login</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/register"><FontAwesomeIcon icon={faUserPlus}/> Register</Link>
                    </Menu.Item>
                </>
            )
        }

        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content" style={{ "padding": "25px 60px" }} >{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        catrin ©2021 Created by Bence Ambrus
      </Footer>
    </ANTlayout>
  );
}

export default Layout;
