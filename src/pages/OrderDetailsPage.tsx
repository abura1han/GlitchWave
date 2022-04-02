import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import ContentBox from "../components/contents/ContentBox";
import PageWrapper from "../components/PageWrapper";
import OrderDetailsProduct from "../components/products/OrderDetailsProduct";

/**
 * Fetch order details by order id and
 * allow to accept/reject orders
 */
const OrderDetailsPage: React.FC = () => {
  const [orderedProductId, setOrderedProductId] = useState<number>(0);

  useEffect(() => {
    //   Get order id from location.pathname & convert to number
    setOrderedProductId(Number(window.location.pathname.split("/")[2]));
  }, []);

  return (
    <PageWrapper>
      <ContentBox name={`Order #${orderedProductId}`}>
        <div className="border-b border-b-glitch-box"></div>
        <div className="px-5 py-5">
          {/* Ordered products */}
          <OrderDetailsProduct
            name="Ice cream"
            price={111}
            units={2}
            quantity={1}
            image=""
          />
          <div className="mt-4">
            <div className="flex items-center justify-between border-b border-b-glitch-box py-2 text-white">
              <span>Item Total</span>
              <span>$198</span>
            </div>
            <div className="flex items-center justify-between border-b border-b-glitch-box py-2 text-white">
              <span>Delivery</span>
              <span>$24</span>
            </div>
            <div className="flex items-center justify-between font-medium py-2 text-white">
              <span>Grand Toatal</span>
              <span>$242</span>
            </div>
          </div>

          <hr className="w-full border-b border-b-glitch-box my-5" />

          {/* Customer details */}
          <div className="mt-4">
            <div className="text-white flex items-center justify-between">
              <div className="font-medium">CUSTOMER DETAILS</div>
              <Button>
                <span className="material-icons-outlined mr-2 text-lg">
                  share
                </span>
                <span>Share</span>
              </Button>
            </div>
            <div className="flex items-center justify-between border-b border-b-glitch-box py-2 text-white">
              <span>Name</span>
              <span>Abu Raihan</span>
            </div>
            <div className="flex items-center justify-between border-b border-b-glitch-box py-2 text-white">
              <span>Mobile</span>
              <div>
                <span>0113718731</span>
                <button className="material-icons-outlined mx-3 text-lg px-1 bg-green-500 text-white rounded">
                  whatsapp
                </button>
                <button className="material-icons-outlined text-lg px-1 bg-blue-500 text-white rounded">
                  phone
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-b-glitch-box py-2 text-base text-white">
              <span>Address</span>
              <span>Mohammad nagar, Khulna</span>
            </div>
            <div className="flex items-center justify-between border-b border-b-glitch-box py-2 text-base text-white">
              <span>Pin Code</span>
              <span>111132</span>
            </div>
            <div className="flex items-center justify-between border-b border-b-glitch-box py-2 text-base text-white">
              <span>City</span>
              <span>Khulna</span>
            </div>
            <div className="flex items-center justify-between border-b border-b-glitch-box py-2 text-base text-white">
              <span>Payment</span>
              <Button>
                <span className="text-yellow-400 px-1">Cash on Delivery</span>
              </Button>
            </div>
          </div>

          {/* Order actions */}
          <div className="mt-5 flex">
            <div>
              <Button className="hover:bg-rose-500">
                <span className="material-icons text-lg mr-2 py-1">close</span>
                <span>Reject</span>
              </Button>
            </div>
            <div className="ml-3">
              <Button className="hover:bg-glitch-orange">
                <span className="material-icons text-lg mr-2 py-1">check</span>
                <span>Accept</span>
              </Button>
            </div>
          </div>
        </div>
      </ContentBox>
    </PageWrapper>
  );
};

export default OrderDetailsPage;
