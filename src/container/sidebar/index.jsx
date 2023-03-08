import { Button, Card, Menu, Space } from "antd";
import React from "react";
import {
  QrcodeOutlined,
  DropboxOutlined,
  TeamOutlined,
  BankOutlined,
  InboxOutlined,
  TrophyOutlined,
  InfoCircleOutlined,
  DollarCircleOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  const names = [
    ["Dashboard", <QrcodeOutlined />, "aboutUs"],
    ["Orders", <DropboxOutlined />, "aboutUs"],
    ["Team Members", <TeamOutlined />, "aboutUs"],
    ["Partners", <BankOutlined />, "aboutUs"],
    ["Prduct Listings", <InboxOutlined />, "aboutUs"],
    ["Awards & Honours", <TrophyOutlined />, "aboutUs"],
    ["About Us", <InfoCircleOutlined />, "aboutUs"],
    ["Payment Info", <DollarCircleOutlined />, "aboutUs"],
  ];

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label: <b>{label}</b>,
    };
  }
  const items = names.map((item, index) => getItem(item[0], index, item[1]));

  const onClick = (e) => {
    console.log("click", e, names[e.key]);
    navigate(names[e.key][2]);
  };
  return (
    <div className="sidebar">
      <div className="sidebar--logo">
        <img src={"src/assets/react.svg"} alt="logo" />
      </div>
      <Menu
        onClick={onClick}
        style={{
          width: 240,
        }}
        mode="vertical"
        items={items}
        defaultSelectedKeys={["6"]}
      />
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <QuestionCircleFilled style={{ fontSize: "30px", color: "gray" }} />
        }
      >
        <Card.Meta
          title="Need Help? "
          description={
            <Space direction="vertical" align="center">
              <div>Our Support team is at your disposal.</div>
              <Button type="primary" style={{ backgroundColor: "black" }}>
                Get Help
              </Button>
            </Space>
          }
        />
      </Card>
    </div>
  );
};

export default Sidebar;
