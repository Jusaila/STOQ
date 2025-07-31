import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";

// Import your category-specific pages
import HouseholdsPage from "./pages/categories/HouseholdsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={<LandingPage />} />

         {/* Custom pages per category */}
        <Route path="/households" element={<HouseholdsPage />} />
        {/* <Route path="/freelancers" element={<FreelancersPage />} />
        <Route path="/farmers" element={<FarmersPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
