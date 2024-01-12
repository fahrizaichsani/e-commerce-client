import priceFormat from "../helpers/priceFormat";
export default function CardDetail({ detailProduct }) {
  return (
    <div className="card lg:card-side bg-[#2e3339] text-[#faf9f7] w-[800px] h-[396px] shadow-xl">
      <div className="rounded-l-xl w-[50%] overflow-hidden">
      <figure>
        <img src={detailProduct.imgUrl} alt="product-detail" className="object-cover w-[400px] h-[396px]"/>
      </figure>
      </div>
      <div className="card-body w-[50%] font-mono">
        <p>Description: {detailProduct.description}</p>
        <span>Price: {priceFormat(detailProduct.price)}</span>
        <span>Stock: {detailProduct.stock}</span>
        <span>Category: {detailProduct.categoryId}</span>
      </div>
    </div>
  );
}
