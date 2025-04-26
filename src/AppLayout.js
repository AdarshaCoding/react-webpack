import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./pages/About";
import Contact from "./pages/Contact";

const About = lazy(() => import("AboutInHost/About"));

const AppLayout = () => {
  return (
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
  );
};

export default AppLayout;
