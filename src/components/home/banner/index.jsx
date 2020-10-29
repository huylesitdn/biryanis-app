/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Col } from 'antd'

import './index.scss'

const Banner = props => {
  return (
    <div className='home-banner'>
      <Row gutter={24}>
        <Col md={6}>
          <div className="banner-item">
            <img className='bg-item' src="/assets/images/car.svg" alt=""/>
            <span>Delivery</span>
            <a href="#" className='btn-icon'>
              <img src="/assets/images/next.svg" alt='' />
            </a>
          </div>
        </Col>
        <Col md={6}>
          <div className="banner-item">
            <img className='bg-item' src="/assets/images/cart1.svg" alt=""/>
            <span>Takeaway</span>
            <a href="#" className='btn-icon'>
              <img src="/assets/images/next.svg" alt='' />
            </a>
          </div>
        </Col>
        <Col md={6}>
          <div className="banner-item">
            <img className='bg-item' src="/assets/images/flag.svg" alt=""/>
            <span>Dine-in</span>
            <a href="#" className='btn-icon'>
              <img src="/assets/images/next.svg" alt='' />
            </a>
          </div>
        </Col>
        <Col md={6}>
          <div className="banner-item active">
            <img className='bg-item' src="/assets/images/book.svg" alt=""/>
            <span>Menu</span>
            <a href="#" className='btn-icon'>
              <img src="/assets/images/checked.svg" alt='' />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Banner