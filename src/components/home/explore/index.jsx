/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Col, Row, Tabs } from "antd";

import "./index.scss";
import ExploreItem from "../exploreItem";

const { TabPane } = Tabs;

const Explore = (props) => {
  const [tabIndex, setTabIndex] = useState("1");

  const handleChangeTags = (tab) => {
    console.log(tab);
    setTabIndex(tab);
  };

  return (
    <div className="explore">
      <div className="ex-header">
        <h3>Explore menu</h3>
        <div className="ex-hd-right">
          <p>
            <strong>Browsing for •</strong> Gachibowli, Hyderabad
          </p>
          <a href="#">
            Change <img src="/assets/images/next-small.svg" alt="" />
          </a>
        </div>
      </div>

      <Tabs defaultActiveKey={tabIndex} onChange={handleChangeTags}>
        <TabPane tab="Biryani" key="1" />
        <TabPane tab="Fried Rice" key="2" />
        <TabPane tab="Tandoori" key="3" />
        <TabPane tab="Starters" key="4" />
        <TabPane tab="Chinese" key="5" />
        <TabPane tab="Dal" key="6" />
        <TabPane tab="Rice" key="7" />
        <TabPane tab="Salads" key="8" />
        <TabPane tab="Special" key="9" />
        <TabPane tab="Desserts" key="10" />
      </Tabs>

      <div className="view-explore">
        <Row gutter={24}>
          <Col md={8}>
            <ExploreItem />
          </Col>
          <Col md={8}>
            <ExploreItem />
          </Col>
          <Col md={8}>
            <ExploreItem />
          </Col>
          <Col md={8}>
            <ExploreItem />
          </Col>
          <Col md={8}>
            <ExploreItem />
          </Col>
          <Col md={8}>
            <ExploreItem />
          </Col>
          <Col md={8}>
            <ExploreItem />
          </Col>
          <Col md={8}>
            <ExploreItem />
          </Col>
          <Col md={8}>
            <ExploreItem />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Explore;
