const Gallery = () => {
  return (
    <>
      <main>
        <section className="gallery section">
          <div className="container">
            <div className="gallery_header section_header">
              <h2 className="gallery_header-title section_header-title" data-aos="fade-right">
                Gallery with our Cuts
              </h2>
              <span
                className="gallery_header-subtitle section_header-subtitle"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-once="false"
              >
                Gallery
              </span>
            </div>
            <div className="gallery_content">
              <ul className="gallery_content-filters d-flex flex-wrap">
                <li className="list-item">
                  <a data-target="all" className="gallery_content-filters_filter current" href="#">
                    All
                  </a>
                </li>
                <li className="list-item">
                  <a data-target="haircut" className="gallery_content-filters_filter" href="#">
                    Haircut
                  </a>
                </li>
                <li className="list-item">
                  <a data-target="beard" className="gallery_content-filters_filter" href="#">
                    Beard and mustache
                  </a>
                </li>
                <li className="list-item">
                  <a data-target="dyeing" className="gallery_content-filters_filter" href="#">
                    Hair dyeing
                  </a>
                </li>
              </ul>
              <div className="gallery_content-media">
                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["haircut", "dyeing"]'
                  data-order="1"
                >
                  <a className="aspect" href="img/placeholder.jpg" data-caption="Image caption">
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="img/placeholder.jpg"
                          srcSet="img/placeholder.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="img/placeholder.jpg"
                          src="img/placeholder.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>

                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["beard"]'
                  data-order="2"
                >
                  <a className="aspect" href="img/placeholder.jpg" data-caption="Image caption">
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="img/placeholder.jpg"
                          srcSet="img/placeholder.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="img/placeholder.jpg"
                          src="img/placeholder.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>

                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["beard", "haircut"]'
                  data-order="3"
                >
                  <a className="aspect" href="img/placeholder.jpg" data-caption="Image caption">
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="img/placeholder.jpg"
                          srcSet="img/placeholder.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="img/placeholder.jpg"
                          src="img/placeholder.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>

                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["beard", "haircut", "dyeing"]'
                  data-order="4"
                >
                  <a className="aspect" href="img/placeholder.jpg" data-caption="Image caption">
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="img/placeholder.jpg"
                          srcSet="img/placeholder.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="img/placeholder.jpg"
                          src="img/placeholder.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>

                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["haircut", "dyeing"]'
                  data-order="5"
                >
                  <a className="aspect" href="img/placeholder.jpg" data-caption="Image caption">
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="img/placeholder.jpg"
                          srcSet="img/placeholder.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="img/placeholder.jpg"
                          src="img/placeholder.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>

                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["dyeing"]'
                  data-order="6"
                >
                  <a className="aspect" href="img/placeholder.jpg" data-caption="Image caption">
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="img/placeholder.jpg"
                          srcSet="img/placeholder.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="img/placeholder.jpg"
                          src="img/placeholder.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>
              </div>
            </div>
            <div className="pagination gallery_pagination d-flex justify-content-center align-items-center">
              <a className="pagination_control btn btn--revert theme-element" href="#">
                Back
              </a>
              <ul className="pagination_pages d-flex">
                <li className="pagination_pages-page">
                  <a className="theme-element btn btn--revert" href="#">
                    1
                  </a>
                </li>
                <li className="pagination_pages-page">
                  <a className="theme-element btn btn--revert current" href="#">
                    2
                  </a>
                </li>
                <li className="pagination_pages-page">
                  <a className="theme-element btn btn--revert" href="#">
                    3
                  </a>
                </li>
              </ul>
              <a className="pagination_control btn btn--revert theme-element" href="#">
                Next
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
