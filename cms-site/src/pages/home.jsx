import React from "react";
import Table from "../components/table";
import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#faf9f7" }}>
        <Header />
        <Table />
        <Footer />
      </div>
    </>
  );
}

export default Home;
