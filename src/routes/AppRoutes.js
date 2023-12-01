import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PrimeVideoPage from "../pages/PrimeVideoPage/PrimeVideoPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import TodosPage from "../pages/TodosPage/TodosPage";
import UnitTestingDemoPage from "../pages/UnitTestingDemoPage/UnitTestingDemoPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import AddUser from "../pages/UsersPage/components/AddUser";
import UserDetails from "../pages/UsersPage/UserDetails";
import History from "../pages/AboutUsPage/components/History";
import Team from "../pages/AboutUsPage/components/Team";
import Careers from "../pages/AboutUsPage/components/Careers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prime-video" element={<PrimeVideoPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/add" element={<AddUser />} />
      <Route path="/users/:userId" element={<UserDetails />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/unit-testing-demo" element={<UnitTestingDemoPage />} />
      <Route path="/about-us" element={<AboutUsPage />}>
        <Route path="history" element={<History />} />
        <Route path="team" element={<Team />} />
        <Route path="careers" element={<Careers />} />
      </Route>
      <Route path="/contact-us" element={<ContactUsPage />} />
    </Routes>
  );
};

export default AppRoutes;
