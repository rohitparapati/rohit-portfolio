import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/utils/ScrollToTop";

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <Navbar />
      <ScrollToTop />

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />

          {/* 404 must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
