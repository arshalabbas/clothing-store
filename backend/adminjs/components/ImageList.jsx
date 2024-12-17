import React from "react";
import { Box } from "@adminjs/design-system";

const ImageList = (props) => {
  const { record, property } = props;
  const imageUrl = record?.params?.[property.name];

  if (!imageUrl) return null;

  console.log(imageUrl);

  return (
    <Box>
      <img
        src={`http://localhost:3000/uploads/${imageUrl}`}
        alt="Category"
        style={{ width: "100px", height: "auto", borderRadius: "4px" }}
      />
    </Box>
  );
};

export default ImageList;
