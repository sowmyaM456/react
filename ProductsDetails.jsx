import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Dataproduct = () => {
  let [showproducts, setshowproducts] = useState([])

  let [search, setsearch] = useState("")
  let [category, setCategory] = useState("")
  let [categorylist, setcategorylist] = useState([])
  let [page, setpage] = useState(1)
  let perpage = 10

  let [totalproductslist, settotalproductslist] = useState(0)


  useEffect(() => {
    async function productsapi() {
      let { data } = await axios.get(`https://dummyjson.com/products/category-list`)
      console.log(data);
      setcategorylist(data)
}
    productsapi()
  }

    , [])
  useEffect(() => {
    async function renderproduct() {
      let url;
      try {

        if (category) {
          url = `https://dummyjson.com/products/category/${category}`

        } else if (search) {
          url = `https://dummyjson.com/products/search?q=${search}`

        }
        else {
          url = `https://dummyjson.com/products?limit=100`


        }
        let { data } = await axios.get(url)

        let allproducts = data.products || []
        console.log(data);

        settotalproductslist(allproducts.length)
        let pages = allproducts.slice((page - 1) * perpage, page * perpage)
        setshowproducts(pages)
      }
      catch (error) {
        console.log(error.response);

      }

    }
    renderproduct()
  }, [page, search, category])

  let productsnum = Math.ceil(totalproductslist / perpage)

  return (
    <>

      <div className="row ">
        <div className="col-5 ">
          <input type="text" className="form-control w-50 shadow-lg text-center"
            // style={{ marginLeft: '20px' }}
            placeholder="Search...."
            value={search}
            onChange={(e) => {
              setpage(1)
              setCategory('')
              setsearch(e.target.value)
            }}
          />
        </div>

        <div className="col-5 ">
          <select name="" id="" className="form-control text-center w-50 shadow-lg"
            // style={{ marginLeft: '460px' }}
            onChange={(e) => {
              setpage(1)
              setsearch("")
              setCategory(e.target.value)
            }}
          >
            <option value="All Categories">Categories</option>
            {
              categorylist.map((cate, i) => (
                <option value={cate} key={i}>{cate}</option>

              ))
            }
          </select>
        </div>
      </div>
      <br />

      <div className="row justify-content-center ">

        {
          showproducts.map((item, i) => (
            <div
              className="col-4 "
              key={item.id}

            >


              <div className="card p-3 m-3 d-flex justify-content-between shadow-lg rounded-4" style={{ minHeight: "350px", maxHeight: "auto", width: "auto" }}>
                <Link to={`/product/${item.id}`} className="nav-link">
                  <h2 className="text-center">{item.title}</h2>
                  <center><img src={item.thumbnail} alt={item.title} style={{ height: "150px" }} className="shadow-sm mb-2" /></center>
                  <p
                  >{item.description.length > 70
                    ? item.description.slice(0, 70) + ' ...'
                    : item.description}</p>
                </Link>
              </div>


            </div>
          ))

        }
     
      </div>
      {
        productsnum > 1 && (
          <div className="row justify-content-center">
            {Array.from({ length: productsnum }, (_, i) => i + 1).map(btn => (
              <div className="col-1">
                <button className={`btn ${page === btn ? "btn-primary" : "btn-secondary"}`} onClick={() => setpage(btn)}>
                  {btn}
                </button>
              </div>
            )


            )}
          </div>
        )
      }


    </>)
}
export default Dataproduct

