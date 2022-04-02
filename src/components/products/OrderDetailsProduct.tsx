import React from "react";
import configs from "../../configs.json";

interface Props {
  name: string;
  units: number;
  price: number;
  image: string;
  quantity: number;
}

const OrderDetailsProduct: React.FC<Props> = ({
  name,
  price,
  units,
  image,
  quantity,
}) => {
  return (
    <div className={"w-full"}>
      {/* Product order details */}
      {/* Product preview thumbnail */}
      <img
        src={image ? image : configs.defaultProductImage}
        alt={name}
        className="max-w-xs w-full rounded block mx-auto"
      />
      <div className="flex-1 mt-5">
        <div className="text-white text-2xl">{name && name}</div>
      </div>
    </div>
  );
};

export default OrderDetailsProduct;
