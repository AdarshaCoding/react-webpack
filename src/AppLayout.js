import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const About = lazy(() => import("AboutInHost/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <div className="bg-gradient-to-r from-gray-800 to-blue-900 min-h-screen text-white">
          <Header />
          <Suspense fallback={<p>Loading....</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default AppLayout;
