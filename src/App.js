import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mt-5 pt-2">
        <AppRoutes /> {/* Use the imported routes component */}
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
