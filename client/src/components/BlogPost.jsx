const BlogPost = ({ news }) => {
  return (
    <li className="feed_posts-post col-md-6 col-xl-4" data-aos="fade-up">
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
          <h3 className="title">{news.title}</h3>
          <div className="info highlight">
            <span className="info_date">{news.createdAt}</span>
          </div>
          <p className="preview">{news.text}</p>
        </div>
      </a>
    </li>
  );
};

export default BlogPost;
