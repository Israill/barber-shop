import Start from '@/components/Start';

const Blog = () => {
  return (
    <main>
      <section className="feed section">
        <div className="container">
          <div className="feed_header section_header">
            <h2 className="feed_header-title section_header-title" data-aos="fade-right">
              Our blog
            </h2>
            <span
              className="feed_header-subtitle section_header-subtitle"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-once="false"
            >
              Recent posts
            </span>
          </div>
          <ul className="feed_posts d-md-flex flex-wrap">
            <li className="feed_posts-post col-md-6 col-xl-4" data-order="1" data-aos="fade-up">
              <a
                className="feed_posts-post_wrapper d-flex flex-column justify-content-between"
                href="post.html"
              >
                <div className="media">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy post-img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="5 advantages why you should visit barbershop"
                    />
                  </picture>
                </div>
                <div className="main d-flex flex-column justify-content-between flex-grow-1">
                  <h3 className="title">5 advantages why you should visit barbershop</h3>
                  <div className="info highlight">
                    <span className="info_date">04 August, 2021</span>
                    <span className="info_author">by admin</span>
                  </div>
                  <p className="preview">
                    Eget ut sodales arcu aliquet diam nec laoreet fames. Urna, eu pharetra
                    consequat, euismod iaculis tristique maecenas.
                  </p>
                </div>
              </a>
            </li>
            <li className="feed_posts-post col-md-6 col-xl-4" data-order="2" data-aos="fade-up">
              <a
                className="feed_posts-post_wrapper d-flex flex-column justify-content-between"
                href="post.html"
              >
                <div className="media">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy post-img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="Popular cosmetics for hair styling"
                    />
                  </picture>
                </div>
                <div className="main d-flex flex-column justify-content-between flex-grow-1">
                  <h3 className="title">Popular cosmetics for hair styling</h3>
                  <div className="info highlight">
                    <span className="info_date">02 August, 2021</span>
                    <span className="info_author">by admin</span>
                  </div>
                  <p className="preview">
                    Eget ut sodales arcu aliquet diam nec laoreet fames. Urna, eu pharetra
                    consequat, euismod iaculis tristique maecenas.
                  </p>
                </div>
              </a>
            </li>
            <li className="feed_posts-post col-md-6 col-xl-4" data-order="3" data-aos="fade-up">
              <a
                className="feed_posts-post_wrapper d-flex flex-column justify-content-between"
                href="post.html"
              >
                <div className="media">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy post-img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="Features of beard and mustache care"
                    />
                  </picture>
                </div>
                <div className="main d-flex flex-column justify-content-between flex-grow-1">
                  <h3 className="title">Features of beard and mustache care</h3>
                  <div className="info highlight">
                    <span className="info_date">12 July, 2021</span>
                    <span className="info_author">by admin</span>
                  </div>
                  <p className="preview">
                    Eget ut sodales arcu aliquet diam nec laoreet fames. Urna, eu pharetra
                    consequat, euismod iaculis tristique maecenas.
                  </p>
                </div>
              </a>
            </li>
            <li className="feed_posts-post col-md-6 col-xl-4" data-order="4" data-aos="fade-up">
              <a
                className="feed_posts-post_wrapper d-flex flex-column justify-content-between"
                href="post.html"
              >
                <div className="media">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy post-img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="Why Barber Shop is the peaceful place"
                    />
                  </picture>
                </div>
                <div className="main d-flex flex-column justify-content-between flex-grow-1">
                  <h3 className="title">Why Barber Shop is the peaceful place</h3>
                  <div className="info highlight">
                    <span className="info_date">07 july, 2021</span>
                    <span className="info_author">by admin</span>
                  </div>
                  <p className="preview">
                    Nisi adipiscing ut cras ac imperdiet amet. Tempor phasellus quam feugiat enim
                    fringilla eu. Tellus tincidunt sollicitudin penatibus pharetra dui.
                  </p>
                </div>
              </a>
            </li>
            <li className="feed_posts-post col-md-6 col-xl-4" data-order="5" data-aos="fade-up">
              <a
                className="feed_posts-post_wrapper d-flex flex-column justify-content-between"
                href="post.html"
              >
                <div className="media">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy post-img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="Time to meet our awesome staff members"
                    />
                  </picture>
                </div>
                <div className="main d-flex flex-column justify-content-between flex-grow-1">
                  <h3 className="title">Time to meet our awesome staff members</h3>
                  <div className="info highlight">
                    <span className="info_date">22 June, 2021</span>
                    <span className="info_author">by admin</span>
                  </div>
                  <p className="preview">
                    Eget ut sodales arcu aliquet diam nec laoreet fames. Urna, eu pharetra
                    consequat, euismod iaculis tristique maecenas.
                  </p>
                </div>
              </a>
            </li>
            <li className="feed_posts-post col-md-6 col-xl-4" data-order="6" data-aos="fade-up">
              <a
                className="feed_posts-post_wrapper d-flex flex-column justify-content-between"
                href="post.html"
              >
                <div className="media">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy post-img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="What are the secrets of the haircut?"
                    />
                  </picture>
                </div>
                <div className="main d-flex flex-column justify-content-between flex-grow-1">
                  <h3 className="title">What are the secrets of the haircut?</h3>
                  <div className="info highlight">
                    <span className="info_date">19 June, 2021</span>
                    <span className="info_author">by admin</span>
                  </div>
                  <p className="preview">
                    Molestie nulla quam ut ullamcorper mi nibh feugiat vitae, tortor. Metus
                    vestibulum, vel vivamus quis. Proin fringilla fringilla leo congue sit in.
                  </p>
                </div>
              </a>
            </li>
            <li className="feed_posts-post col-md-6 col-xl-4" data-order="7" data-aos="fade-up">
              <a
                className="feed_posts-post_wrapper d-flex flex-column justify-content-between"
                href="post.html"
              >
                <div className="media">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy post-img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="How good a shave with Barber Shop?"
                    />
                  </picture>
                </div>
                <div className="main d-flex flex-column justify-content-between flex-grow-1">
                  <h3 className="title">How good a shave with Barber Shop?</h3>
                  <div className="info highlight">
                    <span className="info_date">03 June, 2021</span>
                    <span className="info_author">by admin</span>
                  </div>
                  <p className="preview">
                    Quis tincidunt leo tristique rhoncus semper non in eget. Elementum leo feugiat
                    convallis congue fusce nec quam ultricies. Eu velit faucibus sit morbi risus.
                  </p>
                </div>
              </a>
            </li>
            <li className="feed_posts-post col-md-6 col-xl-4" data-order="8" data-aos="fade-up">
              <a
                className="feed_posts-post_wrapper d-flex flex-column justify-content-between"
                href="post.html"
              >
                <div className="media">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy post-img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="Popular cosmetics for hair styling"
                    />
                  </picture>
                </div>
                <div className="main d-flex flex-column justify-content-between flex-grow-1">
                  <h3 className="title">Popular cosmetics for hair styling</h3>
                  <div className="info highlight">
                    <span className="info_date">02 June, 2021</span>
                    <span className="info_author">by admin</span>
                  </div>
                  <p className="preview">
                    Eget ut sodales arcu aliquet diam nec laoreet fames. Urna, eu pharetra
                    consequat, euismod iaculis tristique maecenas.
                  </p>
                </div>
              </a>
            </li>
            <li className="feed_posts-post col-md-6 col-xl-4" data-order="9" data-aos="fade-up">
              <a
                className="feed_posts-post_wrapper d-flex flex-column justify-content-between"
                href="post.html"
              >
                <div className="media">
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy post-img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="Why Barber Shop is the peaceful place"
                    />
                  </picture>
                </div>
                <div className="main d-flex flex-column justify-content-between flex-grow-1">
                  <h3 className="title">Why Barber Shop is the peaceful place</h3>
                  <div className="info highlight">
                    <span className="info_date">16 May, 2021</span>
                    <span className="info_author">by admin</span>
                  </div>
                  <p className="preview">
                    Molestie nulla quam ut ullamcorper mi nibh feugiat vitae, tortor. Metus
                    vestibulum, vel vivamus quis. Proin fringilla fringilla leo congue sit in.
                  </p>
                </div>
              </a>
            </li>
          </ul>
          <div className="pagination feed_pagination d-flex justify-content-center align-items-center">
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
      <Start />
    </main>
  );
};

export default Blog;
