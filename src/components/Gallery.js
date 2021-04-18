import React from "react";
import RecipeReviewCard from "./GalleryCard";

const Gallery = (props) => {
  return (
    <div className="product">
      <RecipeReviewCard cardProps={props} />
    </div>
  );
};
export default Gallery;
