export default function AddForm() {
    return (
      <div >
        <div
          className="
          flex justify-center items-center flex-col
          bg-[#faf9f7]"
          >
            <span className="mt-[20px] text-2xl text-[#2e3339]" >Add Form</span>
          <div
            className="container flex justify-center items-center pb-[60px]"
            style={{ height: "80vh" }}
            >
            <form className="flex flex-col justify-center items-center h-[550px] w-[400px] border rounded-xl shadow-xl">
              <div className="input-group mb-2">
                <label className="form-label text-[#222222]">Name:</label>
                <input type="text" className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]" />
              </div>
              <div className="input-group mb-2">
                <label className="form-label text-[#222222]">Description:</label>
                <input type="password" className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]" />
              </div>
              <div className="input-group mb-2">
                <label className="form-label text-[#222222]">Price:</label>
                <input type="password" className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]" />
              </div>
              <div className="input-group mb-2">
                <label className="form-label text-[#222222]">Image:</label>
                <input type="password" className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]" />
              </div>
              <div className="input-group mb-6">
                <label className="form-label text-[#222222]">Category:</label>
                <input type="password" className="form-control h-[30px] rounded shadow-md border-2 bg-[#ffffff]" />
              </div>
              <button className="btn btn-primary bg-[#2e3339] text-[#faf9f7] md-2 shadow-xl">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }