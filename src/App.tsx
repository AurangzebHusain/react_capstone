// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/shop-component/shop-component";

import AuthenticationPage from "./pages/authenctication/authentication.component";
import Home from "./pages/homepage.component";
import Navigation from "./pages/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<AuthenticationPage />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
