import React from "react";
import { Button, Space, Tag, Avatar, Typography } from "antd";

const Post = () => {
  return (
    <div className="site-layout-content">
      <div className="post-page">
        <div style={styleSheet.cardNameSection}>
          <Space>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Typography.Title level={5}>Shams Ibne Noor</Typography.Title>
          </Space>
        </div>
        <div style={styleSheet.cardTitleSection}>
          <Typography.Title style={{ fontWeight: "700" }} level={2}>
            Code Assignment That I Got During My Web Developer Interview -
            Episode 1 Episode 1Episode 1Episode 1Episode 1 Episode 1
          </Typography.Title>
          <Tag color="error">Romance</Tag>
        </div>
        <div style={styleSheet.middleSection}>
          <Typography.Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
          </Typography.Text>
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

export default Post;
