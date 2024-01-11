import React from "react";
import axios from "axios"
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../components/banner";
import Pagination from "../components/pagination";
import ButtonJoin from "../components/button-join";
import { useState } from "react";
import { useEffect } from "react";

function Homepage() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const {data} = await axios({
        url: "http://35.198.252.59/publics/pub",
        method: "GET"
      })

      setProducts(data)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

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
          {products.length > 0 && products.map(item => {
            console.log(item);
            return <Card key={item.id} item={item}/>
          })}
        </div>
        <Pagination />
        <div style={{ marginTop: 100 }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
