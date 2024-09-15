// src/components/Layout.js
import PropTypes from "prop-types";
import Navbar from "../components/organisms/Navbar";
import { useState } from "react";
import Sidebar from "../components/organisms/Sidebar";

const Layout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div>
      <Navbar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <Sidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
