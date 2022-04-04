import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/404Page";
import CustomerListPage from "./pages/CustomerListPage";
import ManageOrderPage from "./pages/ManageOrderPage";
import PaymentPage from "./pages/PaymentPage";
import ProductPage from "./pages/ProductPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import { PageListContext, PageType } from "./contexts/PageContext";

/**
 * App routes controller
 */
const App: React.FC = () => {
  // Pagelist context for if any time we need to update form another child components
  // Also usable for dynamic sidebar menu. If menu comes form server
  const [pageList, setPageList] = useState<PageType[]>([
    { label: "Dashboard", slug: "/", icon: "dashboard" },
    { label: "Customer list", slug: "/customer-list", icon: "people_alt" },
    { label: "Manage orders", slug: "/manage-orders", icon: "leaderboard" },
    {
      label: "Online payments",
      slug: "/online-payments",
      icon: "account_balance_wallet",
    },
    { label: "Products", slug: "/products", icon: "shop_2" },
    { label: "Settings", slug: "/settings", icon: "settings" },
    { label: "Login", slug: "/login", icon: "login" },
  ]);

  return (
    <PageListContext.Provider value={{ pageList, setPageList }}>
      <BrowserRouter>
        <Routes>
          {/* Customer lists */}
          <Route
            path="/customer-list"
            caseSensitive
            element={<CustomerListPage />}
          />

          {/* Manage orders */}
          <Route
            path="/manage-orders"
            caseSensitive
            element={<ManageOrderPage />}
          />

          {/* Online payments */}
          <Route
            path="/online-payments"
            caseSensitive
            element={<PaymentPage />}
          />

          {/* Order details */}
          <Route
            path="/order/:productId"
            caseSensitive
            element={<OrderDetailsPage />}
          />

          {/* Products */}
          <Route path="/products" caseSensitive element={<ProductPage />} />

          {/* Login page */}
          <Route path="/login" caseSensitive element={<LoginPage />} />

          {/* Home page */}
          <Route path="/" element={<DashboardPage />} />

          {/* 404 page not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </PageListContext.Provider>
  );
};

export default App;
