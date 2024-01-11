export default function CardDetail() {
  return (
    // <div className="flex justify-center card w-[400px] h-[600px] shadow-xl">
    //   <figure className="overflow-hidden">
    //     {" "}
    //     {/* image  */}
    //     <img
    //       src="https://www.stussy.com/cdn/shop/products/1904879H_BLAC_2_66713794-c8a7-4d63-b93d-f39bb184035e.jpg?v=1683044895&width=480"
    //       alt="Shoes"
    //       className="object-cover w-full h-full"
    //     />
    //   </figure>
    //   <div className="card-body bg-[#faf9f8] rounded-b-3xl">
    //     <h2 className="card-title justify-center">Name</h2> {/* Name */}
    //     <p>Deskripsi</p>
    //     <span>Harga</span>
    //     <span>Stock</span>
    //     <span>CategoryId</span>
    //     <span>AuthorId</span>
    //   </div>
    // </div>
    <div className="card lg:card-side bg-[#2e3339] text-[#faf9f7] w-[800px] h-[380px] shadow-xl">
      <figure className="w-[50%]">
        <img
          src="https://www.stussy.com/cdn/shop/products/1904879H_BLAC_2_66713794-c8a7-4d63-b93d-f39bb184035e.jpg?v=1683044895&width=480"
          alt="productpic"
        />
      </figure>
      <div className="card-body w-[50%]">
        {/* <h2 className="card-title">New album is released!</h2> */}
        <p>Deskripsi</p>
        <span>Harga</span>
        <span>Stock</span>
        <span>CategoryId</span>
        <span>AuthorId</span>
      </div>
    </div>
  );
}
