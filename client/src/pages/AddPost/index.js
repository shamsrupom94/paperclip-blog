import React, { useState } from "react";
import { Button, Space, Tag, Avatar, Drawer, Input, Typography, Select } from "antd";
import QuillEditor from "../../components/ReactQuillEditor/QuillEditor";
import PostViewer from "../../components/PostViewer";

const { TextArea } = Input;
const { Option } = Select;

const AddPost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [category, setCategory] = useState("public");
  const [files, setFiles] = useState([]);
  const [showDrawer, setShowDrwaer] = useState(false);
  const [previewContent, setPreviewContent] = useState({});

  const onEditorChange = (value) => {
    setContent(value);
  };

  const onFilesChange = (files) => {
    setFiles(files);
  };

  const selectCategory = (value) => {
    setCategory(value);
  };

  const selectPrivacy = (value) => {
    setPrivacy(value);
  };

  const onPreview = () => {
    let postObject = {
      title,
      privacy,
      category,
      content,
    };

    setPreviewContent(postObject);
    setShowDrwaer(true);
    console.log(postObject);
  };

  const onClose = () => {
      setShowDrwaer(false)
  }

  return (
    <div className="site-layout-content">
      <div className="post-page">
        <div style={styleSheet.cardTitleSection}>
          <Typography.Title style={{ fontWeight: "700" }} level={2}>
            Add New Post
          </Typography.Title>
        </div>
        <div style={styleSheet.editorSection}>
          <div style={styleSheet.singleFields}>
            <Typography.Title level={5}>Post Title</Typography.Title>
            <TextArea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              showCount
              maxLength={100}
              rows={2}
            />
          </div>
          <div style={styleSheet.singleFields}>
            <Typography.Title level={5}>Post Privacy</Typography.Title>
            <Select
              onChange={selectPrivacy}
              style={{ width: "100%" }}
              defaultValue="public"
            >
              <Option value="public">Public</Option>
              <Option value="private">Private</Option>
            </Select>
          </div>
          <div style={styleSheet.singleFields}>
            <Typography.Title level={5}>Select Category</Typography.Title>
            <Select
              onChange={selectCategory}
              style={{ width: "100%" }}
              defaultValue="horror"
            >
              <Option value="horror">Horror</Option>
              <Option value="romance">Romance</Option>
            </Select>
          </div>
          <div style={styleSheet.singleFields}>
            <Typography.Title level={5}>Post Body</Typography.Title>
            <QuillEditor
              placeholder={"Start Posting Something"}
              onEditorChange={onEditorChange}
              onFilesChange={onFilesChange}
            />
          </div>
          <div style={styleSheet.bottomSection}>
            <div style={styleSheet.bottomLeft}>
              <Button type="danger">Cancel</Button>
            </div>
            <div style={styleSheet.bottomRight}>
              <Space>
                <Button onClick={() => onPreview()}>Preview</Button>
                <Button type="primary">Submit Post</Button>
              </Space>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        title="Post Preview"
        placement="right"
        size="large"
        onClose={onClose}
        visible={showDrawer}
      >
        {previewContent ? (
          <PostViewer previewContent={previewContent} />
        ) : (
          <Typography.Text>Nothing to preview</Typography.Text>
        )}
      </Drawer>
    </div>
  );
};

const styleSheet = {
  cardTitleSection: { margin: "2rem 2.5rem 1rem" },
  editorSection: { margin: "2rem 3.5rem 0" },
  singleFields: { margin: "1rem 0 1rem" },
  bottomSection: {
    margin: "1rem 0 1rem",
    display: "flex",
    margin: "1.5rem 0 2.5rem",
  },
  bottomLeft: { width: "50%", textAlign: "left" },
  bottomRight: { width: "50%", textAlign: "right" },
};
export default AddPost;
