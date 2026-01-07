import React from "react";
import LayoutCards from "../components/LayoutCards";
import { useApi } from "../hooks/use-api";
import PageTransition from "../components/PageTransition";
import Loading from "../components/Loading";

const CategoryPage = ({ category, basePath, items }) => {
  const { data: tablets, loading } = useApi('tablets');

  const displayItems =
    items || (tablets ? tablets.filter((item) => item.category === category) : []);

  if (loading && !items) {
    return (
      <PageTransition>
        <Loading />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <LayoutCards items={displayItems} basePath={basePath} />
    </PageTransition>
  );
};

export default CategoryPage;
