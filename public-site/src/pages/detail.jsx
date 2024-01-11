import React from "react";
import Footer from "../components/footer";
import CardDetail from "../components/card-detail";
import Header from "../components/header";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});

  const fetchDetailProduct = async () => {
    try {
      const { data } = await axios({
        url: `http://35.198.252.59/publics/pub/${1}`,
        method: "GET",
      });

      setDetailProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetailProduct()
  }, [])
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
            padding: "180px 24px 100px 24px",
          }}
          >
          <CardDetail key={detailProduct.id} detailProduct={detailProduct}/>
        </div>
        <div className="mt-[150px]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Detail;
