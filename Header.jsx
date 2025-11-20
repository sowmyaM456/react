import { Link } from "react-router-dom";
import { useState } from "react";
export const Header = () => {
const [darkMode, setDarkMode] = useState(false);
const toggleTheme = () => {
    setDarkMode(!darkMode);
if (!darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">Navbar</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">Products</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/userform">UserForm</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/userdashboard">UserDashboard</Link>
              </li>

            </ul>

           

          </div>
        </div>
      </nav>
    </>
  );
};
