import React, { useState } from "react";
import {
  Button,
  Space,
  Typography,
  Drawer,
  Form,
  Col,
  Row,
  Input,
  Divider,
} from "antd";
import ContentCard from "../../components/ContentCard";
import {
  EnvironmentOutlined,
  MailOutlined,
  GiftOutlined,
  FormOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);

  const showDrawer = () => {
    setEditProfile(true);
  };

  const onClose = () => {
    setEditProfile(false);
  };

  return (
    <div>
      <div className="profile-bio">
        <img src="https://joeschmoe.io/api/v1/random" alt="no image" />
        <Typography.Title style={styleSheet.nameFont} level={2}>
          Shams Ibne Noor
        </Typography.Title>
        <div style={{ margin: "0rem 5rem .5rem" }}>
          <Typography.Text style={styleSheet.bioText}>
            In React, image tags are a bit weird. This isn’t really React’s
            fault, but more a problem of where the images will reside on the
            server after the app is built.
          </Typography.Text>
        </div>
        <div style={styleSheet.featureSection}>
          <Typography.Text style={styleSheet.profileFeatures}>
            <EnvironmentOutlined />
            &nbsp; Saarbrucken, Germany
          </Typography.Text>
          <Typography.Text style={styleSheet.profileFeatures}>
            <MailOutlined /> &nbsp; shams.rupom@gmail.com
          </Typography.Text>
          <Typography.Text style={styleSheet.profileFeatures}>
            <GiftOutlined /> &nbsp; Join: 27, May 2022
          </Typography.Text>
          <Typography.Text style={styleSheet.profileFeatures}>
            <FormOutlined /> &nbsp; Posts: 45
          </Typography.Text>
        </div>
        <div style={styleSheet.bottomSection}>
          <Button
            icon={<EditOutlined />}
            onClick={() => showDrawer()}
            type="primary"
          >
            Edit Profile
          </Button>
        </div>
      </div>
      <div className="profile-contents">
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
      <Drawer
        title="Edit Profile"
        width={720}
        onClose={onClose}
        visible={editProfile}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" hideRequiredMark>
          <div style={{ textAlign: "center" }}>
            <img
              style={styleSheet.editProfilePicture}
              src="https://joeschmoe.io/api/v1/random"
              alt="no image"
            />
            <Form.Item
              name="proPicURL"
              label="Profile Picture Url"
              rules={[
                {
                  required: true,
                  message: "please enter an URL for your Profile picture",
                },
              ]}
            >
              <Row gutter={8}>
                <Col span={18}>
                  <Input placeholder="Paste your profile picture url" />
                </Col>
                <Col span={6}>
                  <Button icon={<ReloadOutlined />} block>
                    Revert
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </div>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="userName"
                label="Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please enter email" }]}
              >
                <Input placeholder="Please enter email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  { required: true, message: "Please select your location" },
                ]}
              >
                <Input placeholder="Please enter your Location" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="profileBio"
                label="Profile Bio"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="please enter your Profile Bio"
                />
              </Form.Item>
            </Col>
          </Row>
          <Space>
            <Button type="primary">Save Changes</Button>
            <Button>Discard Changes</Button>
          </Space>
        </Form>
        <br />
        {/* Password from */}
        <Divider orientation="left">Change Password</Divider>
        <Form layout="vertical" hideRequiredMark>
          <Row>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="newPassword"
                label="New Password"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter a new Password",
                  },
                  () => ({
                    validator(_, value) {
                      if (value.length < 8) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Password must be atleast 8 character long")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <Space>
            <Button type="primary">Update Password</Button>
            <Button >Cancel</Button>
          </Space>
        </Form>
      </Drawer>
    </div>
  );
};

const styleSheet = {
  nameFont: {
    fontWeight: "800",
    margin: "0 0 1rem",
    letterSpacing: ".5px",
  },
  bioText: { fontSize: "17px", fontWeight: "40" },
  featureSection: { display: "inline-block", margin: "1rem 2.5rem 1rem" },
  profileFeatures: {
    margin: "1.5rem 2rem 1.5rem",
    fontSize: "15px",
    fontweight: "400",
    color: "grey",
  },
  bottomSection: { margin: ".5rem 2.5rem 1rem" },
  editProfilePicture: {
    height: "25%",
    width: "25%",
    border: "#c6c6c6 1.5px solid",
    borderRadius: "50%",
    margin: ".8rem",
  },
};

export default Profile;
