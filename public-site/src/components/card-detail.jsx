export default function CardDetail({detailProduct}) {
  return (
    <div className="card lg:card-side bg-[#2e3339] text-[#faf9f7] w-[800px] h-[380px] shadow-xl">
      <figure className="w-[50%]">
        <img
          src="https://www.stussy.com/cdn/shop/products/1904879H_BLAC_2_66713794-c8a7-4d63-b93d-f39bb184035e.jpg?v=1683044895&width=480"
          alt="productpic"
        />
      </figure>
      <div className="card-body w-[50%] font-mono">
        <p>Description: {detailProduct.description}</p>
        <span>Price: {detailProduct.price}</span>
        <span>Stock: {detailProduct.stock}</span>
        <span>Category: {detailProduct.categoryId}</span>
      </div>
    </div>
  );
}

