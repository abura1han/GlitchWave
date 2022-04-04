import React, { Suspense, useEffect, useState } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import ContentBox from "../components/contents/ContentBox";
import PageWrapper from "../components/PageWrapper";
import SortByTag from "../components/SortByTag";
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
 * Manage order page
 */
const ManageOrderPage: React.FC = () => {
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
      <ContentBox name="Manage Orders" showSearch>
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
    </PageWrapper>
  );
};

export default ManageOrderPage;
