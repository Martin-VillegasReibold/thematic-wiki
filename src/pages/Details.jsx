import React from "react";
import LayoutDetails from "../components/LayoutDetails";
import { useParams } from "react-router";
import { useItem } from "../hooks/use-item";
import NotFound from "./NotFound";
import PageTransition from "../components/PageTransition";
import Loading from "../components/Loading";

const Details = () => {
  const { id } = useParams();
  const { item, loading, error } = useItem('tablets', id);

  if (loading) {
    return (
      <PageTransition>
        <Loading />
      </PageTransition>
    );
  }

  if (error || !item) return <NotFound />;

  const sections = [
    {
      title: "Overview",
      content: item.description,
    },
    ...(item.details || []),
  ];

  return (
    <PageTransition>
      <div className="flex flex-col items-center min-h-[80vh] px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink font-title mb-4 drop-shadow-sm">
            {item.title}
          </h1>
          {item.image && (
            <div className="w-full max-w-lg mx-auto rounded-xl border-4 border-clay p-2 bg-sand/40 shadow-xl mb-6">
               <img 
                 src={item.image} 
                 alt={item.title} 
                 className="w-full h-auto rounded-lg object-cover"
               />
            </div>
          )}
        </div>

        {/* Main Content Layout */}
        <LayoutDetails sections={sections} />
      </div>
    </PageTransition>
  );
};

export default Details;
