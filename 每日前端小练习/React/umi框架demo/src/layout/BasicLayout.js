// 注意这里我们除了从antd中引入了Layout布局组件，还引入了Menu菜单组件，Icon图标组件

import { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "umi";

const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh" }}>
          <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              margin: "16px",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "#fff" }}>后台管理系统</h1>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Helloworld</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/dashboard/analysis">分析页</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dashboard/monitor">监控页</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/dashboard/workplace">工作台</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <Link to="/puzzlecards">
                <Icon type="pie-chart" />
                <span>卡片</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/blogmanager">
                <Icon type="pie-chart" />
                <span>博客管理</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            Header
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2020 Created by Zuo GuoLiang
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
