import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categorySlug } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold capitalize">
        {categorySlug.replace(/-/g, " ")}
      </h1>
      <p className="text-lg mt-4">Welcome to the {categorySlug} page.</p>
    </div>
  );
};

export default CategoryPage;
