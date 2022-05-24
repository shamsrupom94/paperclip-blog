import React from "react";
import { Button, Typography } from "antd";

const LeftPanel = () => {
  return (
    <div className="left-static">
      <Typography.Title level={4}>
        Paperclip Blog Community is a community of 850,699 amazing developers
      </Typography.Title>
      <Typography.Text>
        We're a place where coders share, stay up-to-date and grow their
        careers.
      </Typography.Text>
      <div style={styleSheet.bottomSection}>
        <Button type="primary" block>
          Create Account
        </Button>
        <Button type="link">Login</Button>
      </div>
    </div>
  );
};

const styleSheet = {
  bottomSection: { margin: "1rem", textAlign: "center" },
};

export default LeftPanel;
