import React from "react";
import "./App.css";
import "./components/HeaderComponents/HeaderContainer";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <a href="https://www.reactjs.org">
        <CardContainer />
      </a>
      <Footer />
    </div>
  );
};

export default App;
