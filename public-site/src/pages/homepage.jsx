import React from "react";

import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../components/banner";
import Pagination from "../components/pagination";

function Homepage() {
  return (
    <>
      <div
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          backgroundColor: "#faf9f8",
        }}
      >
        <Header />
        {/* <Carousel /> */}
        <Banner />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 10,
            padding: "48px 24px",
            margin: 100,
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Pagination />
        <div style={{marginTop: 100}}>
        <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
