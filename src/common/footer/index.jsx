/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Layout, Row } from "antd";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./index.scss";

const { Footer } = Layout;

const FooterPage = (props) => {
  return (
    <Footer>
      <div className="ft-content">
        <Row gutter={24}>
          <Col md={18}>
            <Row gutter={24}>
              <Col md={6}>
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link to="/">About </Link>
                  </li>
                  <li>
                    <Link to="/"> Story </Link>
                  </li>
                  <li>
                    <Link to="/">Franchise Enquiry</Link>
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <h3>Help</h3>
                <ul>
                  <li>
                    <Link to="/">Contact us </Link>
                  </li>
                  <li>
                    <Link to="/"> FAQs </Link>
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <h3>Trust</h3>
                <ul>
                  <li>
                    <Link to="/">Privacy </Link>
                  </li>
                  <li>
                    <Link to="/"> Terms </Link>
                  </li>
                  <li>
                    <Link to="/">Security</Link>
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <h3>Community</h3>
                <ul>
                  <li>
                    <Link to="/">Referral program </Link>
                  </li>
                  <li>
                    <Link to="/"> Gifting </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <div className="ft-right">
              <div className="follow-us">
                <p>Follow us</p>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
              <div className="apps">
                <a href="#">
                  <img src="/assets/images/apple-store.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/assets/images/google-play.png" alt="" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="copy-right">
          © 2020. All Rights Reserved. Biryanis & More • Privacy Policy • Terms
          & Conditions
        </div>
      </div>
    </Footer>
  );
};

export default FooterPage;
