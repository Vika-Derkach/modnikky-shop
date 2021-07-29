import React from "react";
import CustomerCategories from "../customer-categories";
import CustomerService from "../customer-service";
import "./customer-service-page.css";
const CustomerServicePage = () => {
  return (
    <section className="customer-service-page">
      <CustomerCategories />
      <CustomerService />
    </section>
  );
};
export default CustomerServicePage;
