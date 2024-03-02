import React from "react";
import Footer from "../components/footer";
import CardDetail from "../components/card-detail";
import Header from "../components/header";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import priceFormat from "../helpers/priceFormat";

function Detail() {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});

  const fetchDetailProduct = async () => {
    try {
      const { data } = await axios({
        url: `http://localhost:3000/publics/pub/${id}`,
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

  // if (detailProduct.price) {
  //   detailProduct.price = priceFormat(+detailProduct.price)
  // }
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
