import { Avatar, Button, Dropdown, Input } from "antd";
import React from "react";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./navigation.css";

const Navigation = () => {
  const items = [
    {
      key: "1",
      label: "1st menu item",
    },
    {
      key: "2",
      label: "2nd menu item",
    },
  ];

  return (
    <div className="navigation-bar">
      <div className="navigation-bar--logo">
        <img src={"src/assets/react.svg"} alt="logo" />
      </div>
      <div className="navigation-bar--search">
        <Input prefix={<SearchOutlined />} placeholder={"Search"} />
      </div>
      <div className="navigation-bar--checkout">
        <Button
          type="primary"
          style={{ backgroundColor: "black" }}
          icon={<ShoppingCartOutlined />}
        >
          CheckOut
        </Button>
      </div>
      <div className="navigation-bar--userprofile">
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
          <Button
            type="text"
            icon={
              <Avatar style={{ marginRight: "5px" }} icon={<UserOutlined />} />
            }
          >
            {" "}
            <b>
              User Admin <DownOutlined />
            </b>{" "}
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navigation;
