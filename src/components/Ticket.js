import React from "react";
import CardComponent from "./Card";

import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Ticket = ({ ticket }) => {
  const { title, status, priority, user } = ticket;

  return (
    <CardComponent
      title={title}
      description={
        <>
          <span>
            <CheckCircleOutlined
              style={{ marginRight: "5px", color: "#52c41a" }}
            />
            Status: {status}
          </span>
          <br />
          <span>
            <ExclamationCircleOutlined
              style={{ marginRight: "5px", color: "#faad14" }}
            />
            Priority: {priority}
          </span>
          <br />
          <span>
            <UserOutlined style={{ marginRight: "5px" }} />
            Assigned to: {user}
          </span>
        </>
      }
      buttonText="View Details"
    />
  );
};

export default Ticket;
