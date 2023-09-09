// Card.js
import React from "react";
import { Card } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

function CardComponent({ title, description, buttonText }) {
  return (
    <Card className="card">
      <div className="card-body">
        <h5 className="card-title">
          <CheckCircleOutlined
            style={{ marginRight: "5px", color: "#52c41a" }}
          />
          {title}
        </h5>
        <p className="card-text">
          <ExclamationCircleOutlined
            style={{ marginRight: "5px", color: "#faad14" }}
          />
          {description}
        </p>
        <a href="#" className="btn btn-primary">
          <UserOutlined style={{ marginRight: "5px" }} />
          {buttonText}
        </a>
      </div>
    </Card>
  );
}

export default CardComponent;
