import { CrudOperations } from "../features/Authentication/UserDashBoard";
export const UserList = () => {
  return (
    <>
    <div className="container justify-content-center mt-5">
      <div
        className="d-flex justify-content-center align-items-center bg-light"
        style={{
          minHeight: "100vh",
          paddingTop: "80px" 
        }}
      >
        <div className="col-md-8 text-center">
          <h1 className="mb-2">User List</h1>
     
   

          <CrudOperations />
         </div>
      </div>
      </div>
    </> 
  );
};
