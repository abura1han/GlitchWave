import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";

// Props
interface Props {
  date: string;
  time: string;
  image: string;
  price: number;
  status: string;
  orderId: number;
}

const TransactionsProductPreview: React.FC<Props> = ({
  date,
  time,
  image,
  price,
  status,
  orderId,
}) => {
  return (
    <Link to={"/"} className={"inline-block w-full py-1"}>
      {/* Product payment details */}
      {/* Product preview thumbnail */}
      <div className="flex items-center justify-between w-full">
        <ProductImage url={image && image} />
        <div className="ml-5 flex-1">
          {/* Procut purchase data, time */}
          <div className="text-gray-300">
            {date && date} - {time && time}
          </div>
          {/* Product order id */}
          <div className="text-white text-xl">
            Order Id #{orderId && orderId}
          </div>
          <div className="text-glitch-orange text-lg font-bold">
            ${price && price}
          </div>
          <div className="text-green-500 text-sm">{status && status}</div>
        </div>
      </div>
    </Link>
  );
};

export default TransactionsProductPreview;
