import React, { Suspense, useEffect, useState } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import ContentBox from "../components/contents/ContentBox";
import DisplaySection from "../components/DisplaySection";
import PageWrapper from "../components/PageWrapper";
import SortByTag from "../components/SortByTag";
import Search from "../components/Search";
import LeadershipIcon from "../assets/images/leadership.svg";
import ShoppingCartIcon from "../assets/images/shopping-cart.svg";
import TotalSalesIcon from "../assets/images/sales.svg";
import StoreIcon from "../assets/images/store.svg";
import configs from "../configs.json";

const OrderedProductPreview = React.lazy(
  () => import("../components/products/OrderedProductPreview")
);

interface OrderedProductType {
  date: string;
  time: string;
  price: number;
  paymentStatus: string;
  shipingStatus: string;
  quantity: number;
  productId: number;
  image: string;
}

/**
 * Dashboard page
 * Sows current store status & active products list by category
 */
const DashboardPage: React.FC = () => {
  const [orderedProductList, steOrderedProductList] = useState<
    OrderedProductType[]
  >([]);

  // Fetch ordered products
  useEffect(() => {
    fetch(`${configs.proxy}/orders.json`)
      .then((res) => res.json())
      .then(({ data }) => {
        steOrderedProductList(data);
      });
  }, []);

  return (
    <PageWrapper>
      <div className="w-full">
        <div className="flex justify-between relative">
          <div>
            <h1 className="text-lg text-gray-100 font-bold leading-5">
              Hello {configs.userName}!
            </h1>
            <p className="text-gray-300 leading-5">
              Welcome back {configs.userName.split(" ")[0]}, and great to meet
              you
            </p>
          </div>
          <div className="ml-1">
            <Search />
          </div>
        </div>

        {/* Store status */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 overflow-x-auto mt-10">
          {/* Toatal saled */}
          <DisplaySection
            displayText="$5333"
            subText="Total Sales"
            icon={TotalSalesIcon}
          />

          {/* Toatal product orders */}
          <DisplaySection
            icon={ShoppingCartIcon}
            displayText={"133"}
            subText={"Product Orders"}
          />

          {/* Store views */}
          <DisplaySection
            icon={StoreIcon}
            displayText={"3344"}
            subText={"Store Views"}
          />

          {/* Product views */}
          <DisplaySection
            icon={LeadershipIcon}
            displayText={"234"}
            subText={"Product Views"}
          />
        </div>

        {/* Active orders */}
        <ContentBox name="Active Products" showSearch>
          <>
            <div className="border-b border-b-glitch-box">
              <SortByTag
                tags={["Pending (129)", "Accepted (13)", "Shipped (6)"]}
              />
            </div>

            {/* Products list */}
            <div className="mt-5"></div>
            <Suspense fallback={<LoadingIndicator />}>
              <ul className="px-5 bg-transparent">
                {orderedProductList.map(
                  (
                    {
                      date,
                      time,
                      quantity,
                      price,
                      productId,
                      paymentStatus,
                      shipingStatus,
                      image,
                    },
                    i
                  ) => (
                    <li
                      className="block mt-4 pb-4 border-b border-b-glitch-box last:border-none"
                      key={i}
                    >
                      <OrderedProductPreview
                        date={date}
                        time={time}
                        paymentStatus={paymentStatus}
                        price={price}
                        quantity={quantity}
                        productId={productId}
                        shipingStatus={shipingStatus}
                        image={image}
                      />
                    </li>
                  )
                )}
              </ul>
            </Suspense>
          </>
        </ContentBox>
      </div>
    </PageWrapper>
  );
};

export default DashboardPage;
