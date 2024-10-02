import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./components/templates/Project";
import Layout from "./layouts/Layout";
import ProjectDetails from "./components/templates/ProjectDetails";
import HomePage from "./components/templates/HomePage";
import About from "./components/templates/About";
import Certificates from "./components/templates/Certificates";

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
          path="/projects"
          element={
            <Layout>
              <Project />
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

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/certificates"
          element={
            <Layout>
              <Certificates />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
