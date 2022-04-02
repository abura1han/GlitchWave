import React, { Suspense, useEffect, useState } from "react";
import ContentBox from "../components/contents/ContentBox";
import LoadingIndicator from "../components/LoadingIndicator";
import PageWrapper from "../components/PageWrapper";
import SortByTag from "../components/SortByTag";
import configs from "../configs.json";

const Product = React.lazy(() => import("../components/products/Product"));

interface ProductType {
  name: string;
  units: number;
  price: number;
  inStock: boolean;
  image: string;
}

/**
 * Product page shows all user created posts
 * Users can make product available on unavailable by clicking on chackbox
 */
const ProductPage: React.FC = () => {
  const [productList, setProductList] = useState<ProductType[]>([]);

  // Fetch products from server
  useEffect(() => {
    fetch(`${configs.proxy}/products.json`)
      .then((res) => res.json())
      .then(({ data }) => {
        setProductList(data);
      });
  }, []);
  return (
    <PageWrapper>
      <div className="w-full">
        <div>
          <h1 className="text-lg text-gray-100 font-bold leading-5">
            Your Products
          </h1>
          <p className="text-gray-300 leading-5">
            Enhance your business by sharing your store URL.
          </p>
        </div>

        <ContentBox name="Active Products" showSearch>
          <>
            <div className="border-b border-b-glitch-box">
              <SortByTag tags={["Products", "Categories"]} />
            </div>

            {/* Products list */}
            <div className="mt-5"></div>
            <Suspense fallback={<LoadingIndicator />}>
              <ul className="px-5 bg-transparent">
                {productList &&
                  productList.map(
                    ({ name, price, units, image, inStock }, i) => (
                      <li
                        className="block mt-4 pb-4 border-b border-b-glitch-box last:border-none"
                        key={i}
                      >
                        <Product
                          name={name}
                          price={price}
                          image={image}
                          inStock={inStock}
                          units={units}
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

export default ProductPage;
