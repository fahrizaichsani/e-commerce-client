import React from "react";

export default function ButtonJoin({ fetchProducts }) {
  return (
    <>
      <div className="join ml-[150px] mt-[100px] font-mono">
        <button className="join-item btn btn-outline" onClick={() => {fetchProducts({sorting: "ASC"})}}>Sort ASC</button>
        <button className="join-item btn btn-outline" onClick={() => {fetchProducts({sorting: "DESC"})}}>Sort DESC</button>
        <button className="join-item btn btn-outline" >Filter</button>
      </div>
    </>
  );
}
