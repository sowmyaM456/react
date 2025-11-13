
import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "../../Components/Loader";

export const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const productsPerPage = 10;

  useEffect(() => {
    async function productsApi() {
      try {
        const { data } = await axios.get("https://dummyjson.com/products?limit=100");
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    productsApi();
  }, []);

  // 👇 Show full-screen loader
  if (loading) {
    return (
      <div
        style={{ position: "fixed", top: 0, left: 0, width: "100vw",height: "100vh",display: "flex",justifyContent: "center", alignItems: "center",  }}
      >
        <Loader />
      </div>
    );
  }
   

  // Pagination logic
  const startIndex = (page - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="container mt-4 pb-5">
<div className="row justify-content-center">
        {currentProducts.map((item) => (
          <div
            key={item.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
          >
            <div
              className="card shadow-sm border-0"
              style={{width: "13rem",borderRadius: "10px", }}
            >
              <img
                src={item.thumbnail}
                className="card-img-top"
                alt={item.title}
                style={{ height: "120px",objectFit: "contain",padding: "8px",}}
              />
              <div className="card-body text-center p-2">
                <h6 className="card-title text-truncate" style={{ fontSize: "15px" }}>
                  {item.title}
                </h6>
                <p
                  className="card-text text-muted text-truncate"
                  style={{ fontSize: "13px", maxWidth: "11rem" }}
                >
                  {item.description}
                </p>
                <button className="btn btn-sm btn-primary w-100">
                  ${item.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed bottom pagination */}
      <div
        className="d-flex justify-content-center align-items-center flex-wrap"
        style={{position: "fixed",bottom: 0,left: 0,width: "100%", backgroundColor: "#fff",padding: "10px 0", boxShadow: "0 -2px 8px rgba(0,0,0,0.1)", zIndex: 1000, gap: "10px",}}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn ${
              page === index + 1 ? "btn-primary" : "btn-outline-primary"
            }`}
            style={{ width: "45px",fontSize: "14px",borderRadius: "6px",}}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};


