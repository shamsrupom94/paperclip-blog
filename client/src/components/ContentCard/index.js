import React from "react";
import { Button, Space, Tag, Avatar, Typography } from "antd";

const ContentCard = () => {
  return (
    <div className="content-card">
      <div style={styleSheet.cardNameSection}>
        <Space>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <Typography.Title level={5}>Shams Ibne Noor</Typography.Title>
        </Space>
      </div>
      <div style={styleSheet.cardTextSection}>
        <Typography.Title level={3}>
          Code Assignment That I Got During My Web Developer Interview - Episode
          1 Episode 1Episode 1Episode 1Episode 1 Episode 1
        </Typography.Title>
        <Tag color="error">Romance</Tag>
      </div>
      <div style={styleSheet.cardBottomSection}>
        <div style={styleSheet.bottomDate}>
          <Typography.Text style={styleSheet.dateText}>
            Posted on: 27 April
          </Typography.Text>
        </div>
        <div style={styleSheet.bottomButton}>
          <Button>View Post</Button>
        </div>
      </div>
    </div>
  );
};

const styleSheet = {
  cardNameSection: { padding: "1.5rem 1.5rem 0", display: "flex" },
  cardTextSection: { padding: "0 3.7rem 0", margin: ".5rem 0 1rem" },
  cardBottomSection: {
    padding: "0 3.7rem 0",
    margin: ".5rem 0 1rem",
    display: "flex",
  },
  bottomDate: { width: "50%", margin: "auto" },
  dateText: { fontWeight: "350", color: "#9a9898" },
  bottomButton: { textAlign: "right", margin: "auto", width: "50%" },
};
export default ContentCard;
