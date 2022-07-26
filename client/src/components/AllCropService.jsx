const AllCropService = () => {
  return(
    <>
                <li className="services_list-item" data-aos="fade-up" data-order="1">
              <div className="services_list-item_wrapper d-flex flex-column flex-lg-row justify-content-between">
                <div className="media" data-aos="fade-right">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="services-img lazy"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="media"
                    />
                  </picture>
                </div>
                <div className="main">
                  <h3 className="title" data-aos="fade-up">
                    Haircut
                  </h3>
                  <p className="description" data-aos="fade-left" data-aos-delay="50">
                    A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra
                    faucibus ultrices volutpat quisque. Convallis nec lectus mi nec eget odio ac
                    tempor. Nunc egestas sed.
                  </p>
                  <div className="pricing d-flex flex-column flex-sm-row">
                    <span className="pricing_price" data-aos="fade-left">
                      Top barber —<span className="highlight">$50</span>
                    </span>
                    <span className="pricing_price" data-aos="fade-left" data-aos-delay="100">
                      Barber —<span className="highlight">$40</span>
                    </span>
                  </div>
                  <div className="wrapper" data-aos="fade-up" data-aos-delay="150">
                    <a className="btn theme-element" href="#">
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="services_list-item" data-aos="fade-up" data-order="2">
              <div className="services_list-item_wrapper d-flex flex-column flex-lg-row-reverse justify-content-between">
                <div className="media" data-aos="fade-left">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="services-img lazy"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="media"
                    />
                  </picture>
                </div>
                <div className="main">
                  <h3 className="title" data-aos="fade-up">
                    Moustache
                  </h3>
                  <p className="description" data-aos="fade-left" data-aos-delay="50">
                    Viverra duis ut orci mi id. Eget ultricies facilisi elementum nec vel a gravida
                    facilisis in. Tellus felis sapien adipiscing. Vel amet ullamcorper tellus sed
                    vel mattis volutpat, id ac.
                  </p>
                  <div className="pricing d-flex flex-column flex-sm-row">
                    <span className="pricing_price" data-aos="fade-left">
                      Top barber —<span className="highlight">$40</span>
                    </span>
                    <span className="pricing_price" data-aos="fade-left" data-aos-delay="100">
                      Barber —<span className="highlight">$30</span>
                    </span>
                  </div>
                  <div className="wrapper" data-aos="fade-up" data-aos-delay="150">
                    <a className="btn theme-element" href="#">
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </li>
    </>
  )
}

export default AllCropService;