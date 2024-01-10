import React from "react";
import Footer from "../components/footer";
import Pagination from "../components/pagination";
import CardDetail from "../components/card-detail";
import Header from "../components/header";

function Detail() {
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
        <Header/>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 10,
            padding: "48px 24px",
            margin: 100
          }}
        >
          <CardDetail />
        </div>
        <div style={{ marginTop: 300 }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Detail;
