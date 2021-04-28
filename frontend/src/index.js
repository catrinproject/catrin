import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "components/App/Root";
// import reportWebVitals from "./reportWebVitals";
import { history } from "services/config";
import store from "store";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";

var mountNode = document.getElementById("container");
const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);
// ReactDOM.render(
//   <Layout className="layout">
//     <Header>
//       <div className="logo" />
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
//         <Menu.Item key="1">My workouts</Menu.Item>
//         <Menu.Item key="2">Statistics</Menu.Item>
//         <Menu.Item key="3">Pair device</Menu.Item>
//       </Menu>
//     </Header>
//     <Content style={{ padding: "0 50px" }}>
//       <Breadcrumb style={{ margin: "16px 0" }}>
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//       </Breadcrumb>
//       <div className="site-layout-content">Content</div>
//     </Content>
//     <Footer style={{ textAlign: "center" }}>
//       catrin ©2021 Created by Bence Ambrus
//     </Footer>
//   </Layout>,
//   mountNode
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
