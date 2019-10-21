// App.js
import React from "react";
import "./App.css";
import Header from "./compomemts/Header";
import Footer from "./compomemts/Footer";
import Content from "./compomemts/Content";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="section-header-spacer"></div>

        <Content />

        <div className="section-line">
          <div className="line "></div>
        </div>
        <Footer />
      </div>
    );
  }
}
