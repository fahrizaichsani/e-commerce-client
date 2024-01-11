import React from "react";

import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../components/banner";
import Pagination from "../components/pagination";
import ButtonJoin from "../components/button-join";

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
        <Banner />
        <ButtonJoin />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 10,
            padding: "48px 24px",
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
