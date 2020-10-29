import { Card, Button, Row, Col } from "antd";

import './index.scss'

const ExploreItem = (props) => {
  return (
    <Card
    className="card-explore"
      hoverable
      cover={
        <img alt="example" src="https://via.placeholder.com/380x200.png" />
      }
    >
      <div className="info">
        <Row gutter={24}>
          <Col md={16}>
            <div className="ex-name">
              <h3>Hyderabadi Dum Chicken Biryani</h3>
            </div>
          </Col>
          <Col md={8}>
            <Button>Add</Button>
          </Col>
          <Col md={24}>
            <p>
              We have mastered the art of Hyderabadi food and you should
              definitely try our Chicken Biryani!
            </p>
            <h5>₹499</h5>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default ExploreItem;
