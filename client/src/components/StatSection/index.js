import React from "react";
import {
  Typography,
  Row,
  Col,
  Statistic,
  Tag,
} from "antd";


const StatSection = () => {
  return (
    <div className="stat-section">
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Total Users" value={90} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Posts" value={50} />
        </Col>
      </Row>
      <div style={{ margin: "1rem", textAlign: "center" }}>
        <Typography.Text style={{ color: "grey" }}>
          Top Categories
        </Typography.Text>
        <div style={{ margin: ".5rem" }}>
          <Tag color="success">Horror</Tag>
          <Tag color="processing">Adventure</Tag>
          <Tag color="error">Romance</Tag>
        </div>
      </div>
    </div>
  );
};

export default StatSection;
