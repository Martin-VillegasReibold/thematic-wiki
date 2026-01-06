import React from "react";
import CharSheet from "../components/CharSheet";
import { useParams } from "react-router";
import PageTransition from "../components/PageTransition";

const CharPage = () => {
  const { id } = useParams();
  return (
    <PageTransition>
      <div>
        <CharSheet id={id} />
      </div>
    </PageTransition>
  );
};

export default CharPage;
