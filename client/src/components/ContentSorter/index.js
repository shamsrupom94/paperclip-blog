import React from "react";
import { Button, Space } from "antd";

const ContentSorter = () => {
  return (
    <div className="top-section">
      <Space>
        <Button type="link">Most Recent</Button>
        <Button type="link">Oldest</Button>
      </Space>
    </div>
  );
};

export default ContentSorter;
