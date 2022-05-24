import React from "react";

import LeftPanel from "../../components/LeftPanel";
import StatSection from "../../components/StatSection";
import ContentCard from "../../components/ContentCard";
import ContentSorter from "../../components/ContentSorter";

const Home = () => {
  return (
    <div className="site-layout-content">
      <LeftPanel />
      <div className="content-section">
        <ContentSorter/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
      </div>
      <StatSection />
    </div>
  );
};



export default Home;
