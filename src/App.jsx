// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Asumsi Anda punya komponen Home untuk halaman utama
import Portfolio from "./Portfolio";
import Layout from "./components/Layout";
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route path="/projects/:url" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
