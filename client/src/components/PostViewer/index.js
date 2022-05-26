import React from "react";
import { Button, Space, Tag, Avatar, Typography } from "antd";

const PostViewer = ({previewContent}) => {
  return (
    <div className="site-layout-content">
      <div className="post-previwer">
        <div style={styleSheet.cardNameSection}>
          <Space>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Typography.Title level={5}>Shams Ibne Noor</Typography.Title>
          </Space>
        </div>
        <div style={styleSheet.cardTitleSection}>
          <Typography.Title style={{ fontWeight: "700" }} level={2}>
            {previewContent?.title}
          </Typography.Title>
          <Tag color="error">{previewContent?.category}</Tag>
        </div>
        <div style={styleSheet.middleSection}>
          <div dangerouslySetInnerHTML={{ __html: previewContent?.content }} />
        </div>
        <div style={styleSheet.cardBottomSection}>
          <div style={styleSheet.bottomDate}>
            <Typography.Text style={styleSheet.dateText}>
              Posted on: 27 April
            </Typography.Text>
          </div>
          <div style={styleSheet.bottomButton}>
            <Button>Close Preview</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styleSheet = {
  cardNameSection: { padding: "2.5rem 2.5rem 0", display: "flex" },
  cardTitleSection: { padding: "0 4.8rem 0", margin: ".5rem 0 1rem" },
  middleSection: { padding: "0 4.8rem 0", margin: ".5rem 0 1rem" },
  cardBottomSection: {
    padding: "1rem 4.8rem 0",
    margin: ".5rem 0 2.5rem",
    display: "flex",
  },
  bottomDate: { width: "50%", margin: "auto" },
  dateText: { fontWeight: "350", color: "#9a9898" },
  bottomButton: { textAlign: "right", margin: "auto", width: "50%" },
};

export default PostViewer;
