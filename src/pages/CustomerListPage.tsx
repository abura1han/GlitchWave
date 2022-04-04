import React, { Suspense, useEffect, useState } from "react";
import ContentBox from "../components/contents/ContentBox";
import LoadingIndicator from "../components/LoadingIndicator";
import PageWrapper from "../components/PageWrapper";
import configs from "../configs.json";
const Customer = React.lazy(() => import("../components/Customer"));

interface CustomerType {
  name: string;
  orderCount: number;
}

const CustomerListPage: React.FC = () => {
  const [customerList, setCustomerList] = useState<CustomerType[]>([]);

  // Fetch all customers and set to customerList
  useEffect(() => {
    fetch(`${configs.proxy}/customers.json`)
      .then((res) => res.json())
      .then(({ data }) => {
        setCustomerList(data);
      });
  }, []);

  return (
    <PageWrapper>
      <ContentBox name="Customer List" showSearch>
        <div className="w-full border-b border-b-glitch-box" />
        <Suspense fallback={<LoadingIndicator />}>
          {/* Customer list */}
          <ul className="px-5 pb-5">
            {customerList.map(({ name, orderCount }, i) => (
              <li className="block mt-5" key={i}>
                <Customer name={name} orderCount={orderCount} />
              </li>
            ))}
          </ul>
        </Suspense>
      </ContentBox>
    </PageWrapper>
  );
};

export default CustomerListPage;
