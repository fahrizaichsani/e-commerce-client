export default function EditForm() {
    return (
      <div >
          <img src="" alt="" />
        <div
          className="
        flex justify-center items-center
        bg-[#faf9f7]"
        >
          <div
            className="container flex justify-center items-center pb-[60px]"
            style={{ height: "100vh" }}
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