import React from "react";
import axios from "axios";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../components/banner";
import Pagination from "../components/pagination";
import ButtonJoin from "../components/button-join";
import { useState } from "react";
import { useEffect } from "react";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async (value) => {
    try {
      let query = { page: 1 };
      if (value.page) {
        query = value;
      }
      
      if (value.sorting) {
        query = value
      }

      const { data } = await axios({
        url: "http://api.casablancass.online/publics/pub",
        method: "GET",
        params: query,
      });

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts({ page });
  }, [page]);

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
        <ButtonJoin fetchProducts={fetchProducts}/>
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
          {products.length > 0 &&
            products.map((item) => {
              // console.log(item);
              return <Card key={item.id} item={item} />;
            })}
        </div>
        <Pagination setPage={setPage} page={page} />
        <div style={{ marginTop: 100 }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
