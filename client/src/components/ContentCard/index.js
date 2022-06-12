import React from "react";
import { Button, Space, Tag, Avatar, Typography } from "antd";

const ContentCard = ({post}) => {
  return (
    <div className="content-card">
      <div style={styleSheet.cardNameSection}>
        <Space>
          <Avatar src={post?.postedBy?.profilePicture} />
          <Typography.Title level={5}>{post?.postedBy?.name}</Typography.Title>
        </Space>
      </div>
      <div style={styleSheet.cardTextSection}>
        <Typography.Title level={3}>
          {post?.title}
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
