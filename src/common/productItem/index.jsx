import { Tag } from "antd";

import "./index.scss";

const ProductItem = (props) => {
  const { background, title, hashtag, sale, description } = props;
  return (
    <div className="product-item">
      <img className="bg-item" src={background} alt="" />
      <div className="info">
        <Tag color="#C4703E">{hashtag}</Tag>
        <h3>{title}</h3>
        <h4>{sale}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
