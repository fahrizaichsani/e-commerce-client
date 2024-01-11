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
          backgroundColor: "#faf9f8",
        }}
      >
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "120px 24px",
          }}
        >
          <CardDetail />
        </div>
        <div className="mt-[150px]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Detail;
