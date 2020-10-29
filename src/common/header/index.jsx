/* eslint-disable jsx-a11y/anchor-is-valid */
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

import "./index.scss";

const { Header } = Layout;

const HeaderPage = (props) => {
  return (
    <Header
      className="headerPage"
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div className="hd-content">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.svg" alt="" />
        </Link>
        <Menu
          className="mainMenu"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About us</Menu.Item>
          <Menu.Item key="3">Our Story</Menu.Item>
          <Menu.Item key="4">Locations</Menu.Item>
          <Menu.Item key="5">Contact us</Menu.Item>
          <Menu.Item key="6">Franchise enquiry</Menu.Item>
          <Menu.Item key="7">Gifting</Menu.Item>
          <Menu.Item key="8">Locations</Menu.Item>
        </Menu>

        <div className="menuRight">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.alipay.com/"
                  >
                    1st menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.taobao.com/"
                  >
                    2nd menu item
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.tmall.com/"
                  >
                    3rd menu item
                  </a>
                </Menu.Item>
                <Menu.Item danger>a danger item</Menu.Item>
              </Menu>
            }
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <span className="location">
                Your Location <DownOutlined />
              </span>
              <span className='address'>Banjara Hills, Road 2, Hyderabad</span>
            </a>
          </Dropdown>

          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <FiSearch />
            </Menu.Item>
            <Menu.Item key="2">
              <FaRegUserCircle />
            </Menu.Item>
            <Menu.Item key="3">
              <img src="/assets/images/cart.svg" alt="" />
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Header>
  );
};

export default HeaderPage;
