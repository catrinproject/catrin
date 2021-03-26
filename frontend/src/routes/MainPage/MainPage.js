import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appLoading, getStarWars } from "actions/appActions";
import Button from "components/Button/Button";
import { Spin } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import "../../index.css";

var mountNode = document.getElementById("container");

const { Header, Content, Footer } = Layout;

const myArr = ["kutya", "cica", "mérési hiba"];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appLoading());
  }, []);

  const [counter, setCounter] = useState(0);

  const { apiLoading, people } = useSelector((store) => store.appReducer);

  return (
    // <div className="App">
    //   {apiLoading ? <Spin /> : null}
    //   {people ? <div>{people.name}</div> : null}
    //   <Button
    //     title="GET STAR WARS"
    //     onClick={() => {
    //       setCounter(counter + 1);
    //       dispatch(getStarWars(counter + 1));
    //     }}
    //   >
    //     GET STAR WARS
    //   </Button>
    //   <Button title="Decrease" onClick={() => setCounter(counter - 1)} />
    //   <br />
    //   {counter}
    //   {myArr.map((value) => (
    //     <div>{value}</div>
    //   ))}
    // </div>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">My workouts</Menu.Item>
          <Menu.Item key="2">Statistics</Menu.Item>
          <Menu.Item key="3">Pair device</Menu.Item>
          <Menu.Item key="4">New workout</Menu.Item>
          <Menu.Item key="5">Profile</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Welcome to catrin!</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        catrin ©2021 Created by Bence Ambrus
      </Footer>
    </Layout>
  );
}

export default App;
