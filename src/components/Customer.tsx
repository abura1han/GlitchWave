import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Props
interface Props {
  name: String; // Name of costomer
  orderCount: Number; // Product orders of customer
}

// Customer name and order count
const Customer: React.FC<Props> = ({ name, orderCount }) => {
  const [customerName, setCustomerName] = useState<String>("");
  const [customerAvatar, setCustomerAvatar] = useState<String>("");
  const [customerOrderCount, setCustomerOrderCount] = useState<Number>(0);

  useEffect(() => {
    // Customer avatar
    if (name.split(" ").length > 1) {
      setCustomerAvatar(
        name.split(" ")[0].charAt(0) + name.split(" ")[1].charAt(0)
      );
    } else {
      setCustomerAvatar(name.split(" ")[0].charAt(0));
    }

    setCustomerName(name);
    setCustomerOrderCount(orderCount);
  }, [name, orderCount]);

  return (
    <Link to={"/"} className={"flex items-center w-full py-1"}>
      {/* Avatar */}
      <div className="w-14 h-14 flex justify-center items-center font-bold text-xl text-white bg-glitch-box rounded-full">
        {customerAvatar}
      </div>
      <div className="ml-5 flex justify-center flex-col">
        {/* Name */}
        <h2 className="font-bold leading-3 text-lg text-white">
          {customerName}
        </h2>
        {/* Order count */}
        <span className="text-sm text-gray-300 mt-1">
          {customerOrderCount} orders
        </span>
      </div>
    </Link>
  );
};

export default Customer;
