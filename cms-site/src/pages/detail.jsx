import React from "react";
import CardDetail from "../components/card-detail";
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
        url: `http://localhost:3000/products/${id}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "180px 24px 100px 24px",
          }}
          >
          <CardDetail key={detailProduct.id} detailProduct={detailProduct}/>
        </div>
    </>
  );
}

export default Detail;
