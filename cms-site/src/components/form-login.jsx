export default function FormLogin() {
    return (
    <div className="container flex justify-center items-center" style={{height: "100vh"}}>
      <form className="flex flex-col justify-center items-center h-60 w-80 border">
        <div className="input-group mb-2">
          <label className="form-label">Email:</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="input-group mb-2">
          <label className="form-label">Password:</label>
          <input type="text" className="form-control"/>
        </div>
        <button className="btn" style={{borderRadius: 0}}>Login</button>
      </form>
    </div>
    );
  }