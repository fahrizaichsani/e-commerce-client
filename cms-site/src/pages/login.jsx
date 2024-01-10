export default function Login() {
  return (
    <div >
        <img src="" alt="" />
      <div
        className="
      flex justify-center items-center
      bg-[#faf9f7]"
      >
        <div
          className="container flex justify-center items-center"
          style={{ height: "100vh" }}
        >
          <form className="flex flex-col justify-center items-center h-[250px] w-[400px] border rounded-xl shadow-xl">
            <div className="input-group mb-2">
              <label className="form-label text-[#222222]">Email:</label>
              <input type="text" className="form-control h-[30px] rounded shadow-xl bg-[#ffffff]" />
            </div>
            <div className="input-group mb-6">
              <label className="form-label text-[#222222]">Password:</label>
              <input type="password" className="form-control h-[30px] rounded shadow-xl bg-[#ffffff]" />
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
