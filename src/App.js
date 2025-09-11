import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";

// Import your category-specific pages
import HouseholdsPage from "./pages/categories/HouseholdsPage";
import ConstructionPage from "./pages/categories/ConstructionPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => {
  return (
    <Router>
      <Routes>
        {/*  page route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />



         {/* Custom pages per category */}
        <Route path="/households" element={<HouseholdsPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
        {/* <Route path="/freelancers" element={<FreelancersPage />} />
        <Route path="/farmers" element={<FarmersPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
