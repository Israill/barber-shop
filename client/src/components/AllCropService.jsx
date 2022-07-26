const AllCropService = () => {
  return(
    <>
  <li className="services_list-item" data-aos="fade-up" data-order="1">
    <div className="services_list-item_wrapper d-flex flex-column flex-lg-row justify-content-between max-w-6xl">
      <div className="media" data-aos="fade-right">
        <picture>
          <source
            data-srcset="https://i9.photo.2gis.com/images/branch/0/30258560055648542_c00d.jpg"
            srcSet="https://i9.photo.2gis.com/images/branch/0/30258560055648542_c00d.jpg"
            type="image/webp"
          />
          <img
            className="services-img lazy"
            data-src="https://i9.photo.2gis.com/images/branch/0/30258560055648542_c00d.jpg"
            src="https://i9.photo.2gis.com/images/branch/0/30258560055648542_c00d.jpg"
            alt="media"
          />
        </picture>
      </div>
      <div className="main ml-0 lg:!ml-16">
        <h3 className="title" data-aos="fade-up">
          Причёска
        </h3>
        <p className="description" data-aos="fade-left" data-aos-delay="50">
          A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra
          faucibus ultrices volutpat quisque. Convallis nec lectus mi nec eget odio ac
          tempor. Nunc egestas sed.
        </p>
        <div className="pricing d-flex flex-column flex-sm-row m-none lg:m-auto">
          <span className="pricing_price" data-aos="fade-left" data-aos-delay="100">
            Барбер —<span className="highlight"> от 1000 ₽</span>
          </span>
        </div>
        <div className="wrapper" data-aos="fade-up" data-aos-delay="150">
          <a className="btn theme-element" href="#">
            Забронировать
          </a>
        </div>
      </div>
    </div>
  </li>
    </>
  )
}

export default AllCropService;