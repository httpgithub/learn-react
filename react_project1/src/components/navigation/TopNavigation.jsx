import React from "react";
import { Layout } from "antd";
import { Row, Col, Menu, Icon, Dropdown, Avatar, message } from "antd";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const TopNavigation = ({logout}) => {
  const { Header } = Layout;
  const onClick = ({ key }) => {
    if (key === "logout") {
      logout();
    }
  };
  const userMenu = (
    <Menu onClick={onClick}>
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  );
  

  return (
    <div>
      <Header>
        <Row>
          <Col span={12}>
            <Menu>
              <Menu.Item key="mail">
                <Icon type="mail" />
                Navigation One
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={12}>
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <Avatar icon="user" />
            </Dropdown>
          </Col>
        </Row>
      </Header>
    </div>
  );
};

export default connect(
  null,
  { logout: logout }
)(TopNavigation);
