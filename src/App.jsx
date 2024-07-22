import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Layout from "./components/Layout";
import ProjectDetails from "./components/ProjectDetails";
import HomePage from "./HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
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

        <Route
          path="/projects/:url"
          element={
            <Layout>
              <ProjectDetails />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
