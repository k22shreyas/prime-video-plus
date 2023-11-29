/* App is a component
 * imports(optional)
 *component definition
 *export
 */

//component

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PrimeVideoPage from "./pages/PrimeVideoPage/PrimeVideoPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import UnitTestingDemoPage from "./pages/UnitTestingDemoPage/UnitTestingDemoPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

function App() {
  //fn definition  == fn body
  //component must return jsx
  return (
    <BrowserRouter>
      <Header></Header>
      <main className="container mt-5 pt-2 ">
    {/* Config the routes */}
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/prime-video" element={<PrimeVideoPage/>} />
      <Route path="/users" element={<UsersPage/>} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/todos" element={<TodosPage/>} />
      <Route path="/unit-testing-demo" element={<UnitTestingDemoPage/>} />
      <Route path="/about-us" element={<AboutUsPage/>} />
      <Route path="/contact-us" element={<ContactUsPage/>} />

    </Routes>

      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App; //default export
