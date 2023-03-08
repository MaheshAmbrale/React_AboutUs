import { Card } from "antd";
import React from "react";

const CustomCard = ({ title, description, extra }) => {
  return (
    <Card
      title={title || "Card Title"}
      style={{
        width: 300,
        marginTop: 16,
      }}
      extra={extra}
    >
      {description}
    </Card>
  );
};

export default CustomCard;
