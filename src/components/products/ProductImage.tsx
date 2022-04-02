import React from "react";
import configs from "../../configs.json";

interface Props {
  url: string;
  alt?: string;
}

const ProductImage: React.FC<Props> = ({
  url = configs.defaultProductImage,
  alt,
}) => {
  return (
    <img
      src={url ? url : configs.defaultProductImage}
      alt={alt && alt}
      className="w-28 h-28 bg-gray-300 rounded"
    />
  );
};

export default ProductImage;
