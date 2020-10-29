import React from "react";
import { Col, Layout, Row } from "antd";

import "./index.scss";
import HeaderPage from "../../common/header";
import Banner from "../../components/home/banner";
import ProductItem from "../../common/productItem";
import Explore from "../../components/home/explore";
import Contact from "../../components/home/contact";
import FooterPage from "../../common/footer";

const { Content } = Layout;

const Home = (props) => {
  return (
    <Layout>
      <HeaderPage />

      <Content className="site-layout" style={{ marginTop: 84 }}>
        <Banner />

        <Row gutter={24}>
          <Col md={16}>
            <ProductItem
              background="https://via.placeholder.com/770x330.png"
              hashtag="APP EXCLUSIVE"
              title="BIG SAVINGS"
              sale="20% OFF"
              description="On all orders"
            />
          </Col>
          <Col md={8}>
            <ProductItem
              background="https://via.placeholder.com/450x330.png"
              hashtag="APP EXCLUSIVE"
              title="BIG SAVINGS"
              sale="20% OFF"
              description="On all orders"
            />
          </Col>
        </Row>

        <Explore />

        <Contact />
      </Content>

      <FooterPage />
    </Layout>
  );
};

export default Home;
