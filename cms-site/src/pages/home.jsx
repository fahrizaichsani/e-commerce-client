import React from "react";
import Table from "../components/table";
import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#faf9f7" }}>
        <Header />
        <div>
          <a href="#">
            <button className="btn btn-primary bg-[#2e3339] text-[#faf9f7] ml-[83px] mt-[0px]">
              Add
            </button>
          </a>
        </div>
        <Table />
        <Footer />
      </div>
    </>
  );
}

export default Home;
