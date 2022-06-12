import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton, Result , Button } from 'antd';

import LeftPanel from "../../components/LeftPanel";
import StatSection from "../../components/StatSection";
import ContentCard from "../../components/ContentCard";
import { POSTS } from "../../utils/api-list";

const BASE_URL = "http://localhost:5000";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    const response = await axios.get(
      `${BASE_URL + POSTS.GET_ALL}?page=0`
    );
    setPosts(response.data);
  };

  const getNextPosts = async () => {

    const response = await axios.get(
      `${BASE_URL + POSTS.GET_ALL}?page=${page}`
    );
    setTimeout(() => {
    setPosts([...posts, ...response.data]);
    }, 1000)

    if (response.data.length === 0 || response.data.length < 5) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={posts.length} //This is important field to render the next data
      next={getNextPosts}
      hasMore={hasMore}
      loader={
        <Skeleton
          avatar
          paragraph={{ rows: 2 }}
          style={{ width: "48%", margin: "auto" }}
        />
      }
      endMessage={
        <Result
          status="success"
          subTitle="You have reached the bottom of the page"
          extra={<Button type="primary">Go to top</Button>}
        />
      }
    >
      <div className="site-layout-content">
        <LeftPanel />
        <div className="content-section">
          {posts?.map((post) => (
            <ContentCard post={post} />
          ))}
        </div>
        <StatSection />
      </div>
    </InfiniteScroll>
  );
};

export default Home;
