// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
// import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="api/orders" element={<OrdersPage />} />
        {/* <Route path="/api/check" element={<SearchBar />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
