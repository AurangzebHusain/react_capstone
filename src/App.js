// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage.component";
import Navigation from "./pages/navigation/navigation.component";
const Shop = () => {
  return <h2>Shop Component</h2>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
