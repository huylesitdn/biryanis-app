import { useState } from "react";
import { Button, Row, Col } from "antd";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import "./index.scss";

const Contact = (props) => {
  const [value, setValue] = useState();

  return (
    <div className="contact">
      <div className="contact-content">
        <Row gutter={48}>
          <Col md={8}>
            <div className="banner">
              <img
                className="bg-phone"
                src="/assets/images/bg-phone.png"
                alt=""
              />
            </div>
          </Col>
          <Col md={16}>
            <h3>
              Do more with our <strong>biryanis app</strong>
            </h3>
            <p>We will send you a link to download our app</p>
            <div className="contact-phone">
              <PhoneInput
                country={"us"}
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
              <Button>Send link</Button>
            </div>
            <p>Download app from</p>
            <div className="apps">
              <img src="/assets/images/apple-store.svg" alt="" />
              <img src="/assets/images/google-play.png" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
