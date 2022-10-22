import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Routes from "./Routes";
import Head from "./Components/head/Head";

const App = () => (
  <Router>
    <Head />
    <Header />
    <div className="pt-24 px-8 w-full h-screen">
      <div className="py-5 w-full h-full">
        <Routes />
      </div>
    </div>
    <Footer />
  </Router>
);

export default App;
