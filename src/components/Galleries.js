import React from "react";
import Gallery from "./Gallery";

const Galleries = ({ prods }) => {
  return (
    <div>
      <h1>Gallery</h1>
      {prods.map((prod) => (
        <Gallery
          name={prod.name}
          price={prod.experience}
          time={prod.time}
          imgUrl={prod.imgUrl}
          key={prod.key}
        />
      ))}
    </div>
  );
};

export default Galleries;
