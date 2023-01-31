import React from "react";
import { Breadcrumb, Layout, Menu, theme, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

const Details: React.FC = () => {
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            float: "left",
            width: 120,
            height: 31,
            marginRight: "24px",
            background: "rgba(255, 255, 255, 0.1)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          TrailHub
        </div>
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, minHeight: 380, background: colorBgContainer}}>
          <p>content....</p>
        </div>
       
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Design ©2023 Created by TrailHub
      </Footer>
    </Layout>
  );
};

export default Details;
