export const Carousel = () => {
  return (
    <>
  
      <div id="carouselExample" className="carousel slide" style={{ height: "80vh" }}>
        <div className="carousel-inner" style={{ height: "100%" }}>

          <div className="carousel-item active" style={{ height: "100%" }}>
            <img
              src="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg"
              className="d-block w-100"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              alt="..."
            />
          </div>

          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src="https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg"
              className="d-block w-100"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              alt="..."
            />
          </div>

          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src="https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg"
              className="d-block w-100"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              alt="..."
            />
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </>
  )
}
