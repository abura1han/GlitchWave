import React from "react";
import ProductImage from "./ProductImage";

interface Props {
  name: string;
  units: number;
  price: number;
  inStock: boolean;
  image: string;
}

/**
 * Product item shows user created products infos and
 * allow to make product available/unabailable by clicking on the checkbox
 */
const Product: React.FC<Props> = ({ name, price, units, image, inStock }) => {
  return (
    <div className={"w-full py-1 flex"}>
      {/* Product order details */}
      <div className="flex items-center justify-between w-full">
        {/* Product preview thumbnail */}
        <ProductImage url={image} />
        <div className="ml-5 flex-1">
          <div className="text-white text-xl">{name && name}</div>
          <div className="text-gray-300">{units} Units</div>
          <div className="text-glitch-orange text-lg font-bold">${price}</div>

          {/* Prodcut status */}
          <div className="text-green-500 text-sm flex items-center">
            {inStock ? "In stock" : "Out of stock"}{" "}
            {/* Toggle product available/unavailable checkbox */}
            <input
              type="checkbox"
              title="Update product inStock"
              className="ml-4"
              checked={inStock}
            />
          </div>
        </div>
      </div>

      {/* More options button */}
      <button className="text-white inline-block">
        <span className="material-icons-outlined text-lg">more_vert</span>
      </button>
    </div>
  );
};

export default Product;
