import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./contexts/CartContext";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main className="container mt-5 pt-2">
          <AppRoutes />
        </main>
      </CartProvider>
      <Footer />
      <ErrorBoundary
      fallback={
        <div className="alert alert-danger">
          some Error occured..try again later
        </div>
      }
    ></ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
