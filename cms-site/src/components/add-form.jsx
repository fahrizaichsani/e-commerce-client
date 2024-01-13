export default function AddForm({ changeInput, submitForm }) {
  return (
    <div>
      <div
        className="
          flex justify-center items-center flex-col
          bg-[#faf9f7]"
      >
        <span className="mt-[20px] text-2xl text-[#2e3339]">Add Form</span>
        <div
          className="container flex justify-center items-center pb-[60px]"
          style={{ height: "80vh" }}
        >
          <form
            onSubmit={submitForm}
            className="flex flex-col justify-center items-center h-[550px] w-[400px] border rounded-xl shadow-xl"
          >
            <div className="input-group mb-2">
              <label className="form-label text-[#222222]">Name:</label>
              <input
                type="text"
                className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]"
                onChange={changeInput}
                name="name"
              />
            </div>
            <div className="input-group mb-2">
              <label className="form-label text-[#222222]">Description:</label>
              <input
                type="text"
                className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]"
                onChange={changeInput}
                name="description"
              />
            </div>
            <div className="input-group mb-2">
              <label className="form-label text-[#222222]">Price:</label>
              <input
                type="number"
                className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]"
                onChange={changeInput}
                name="price"
              />
            </div>
            <div className="input-group mb-2">
              <label className="form-label text-[#222222]">Stock:</label>
              <input
                type="number"
                className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]"
                onChange={changeInput}
                name="stock"
              />
            </div>
            <div className="input-group mb-2">
              <label className="form-label text-[#222222]">Image:</label>
              <input
                type="text"
                className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]"
                onChange={changeInput}
                name="imgUrl"
              />
            </div>
            <div className="input-group mb-6">
              <label className="form-label text-[#222222]">Category:</label>
              <input
                type="number"
                className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]"
                onChange={changeInput}
                name="categoryId"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary bg-[#2e3339] text-[#faf9f7] md-2 shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
