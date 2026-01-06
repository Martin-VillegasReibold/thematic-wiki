import React from "react";
import LayoutCards from "../components/LayoutCards";
import tablets from "../const/tablets";
import PageTransition from "../components/PageTransition";

const CategoryPage = ({ category, basePath, items }) => {
  const displayItems =
    items || tablets.filter((item) => item.category === category);
  return (
    <PageTransition>
      <LayoutCards items={displayItems} basePath={basePath} />
    </PageTransition>
  );
};

export default CategoryPage;
