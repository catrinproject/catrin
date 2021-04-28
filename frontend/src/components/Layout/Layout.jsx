import React from "react";
import { Layout as ANTlayout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "actions/authActions";

const { Header, Content, Footer } = ANTlayout;

function Layout(props) {
    const authReducer = useSelector((store) => store.authReducer);
    const dispatch = useDispatch();
  return (
    <ANTlayout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {
            authReducer.token ? (
                <>
                    <Menu.Item key="1">
                        <Link to="/my-workouts">My workouts</Link>
                    </Menu.Item>
                    <Menu.Item key="2">Statistics</Menu.Item>
                    <Menu.Item key="3">Pair device</Menu.Item>
                    <Menu.Item key="4">New workout</Menu.Item>
                    <Menu.Item key="5">Profile</Menu.Item>
                    <Menu.Item key="6" onClick={()=>{dispatch(logout())}}>
                        Logout
                    </Menu.Item>
                </>
            ) : (
                <>
                    <Menu.Item key="1">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/register">Register</Link>
                    </Menu.Item>
                </>
            )
        }

        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        catrin ©2021 Created by Bence Ambrus
      </Footer>
    </ANTlayout>
  );
}

export default Layout;
