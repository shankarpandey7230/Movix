import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

const Trending = () => {
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
