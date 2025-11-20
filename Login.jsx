export const Login = () => {
  return (
    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      <h2 className="text-center mb-4">Login</h2>
      <form className="mx-1 mx-md-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" />
        </div>
        <button type="button" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};
