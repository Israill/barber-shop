import Start from '@/components/Start';
import { fetchNews } from '@/redux/slice/news';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogPost from '@/components/BlogPost';

const Blog = () => {
  const news = useSelector((state) => state.news.news);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <main>
      <section className="feed section">
        <div className="container">
          <div className="feed_header section_header">
            <h2 className="feed_header-title section_header-title" data-aos="fade-right">
              НАШИ НОВОСТИ
            </h2>
            <span
              className="feed_header-subtitle section_header-subtitle"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-once="false"
            >
              Последние посты
            </span>
          </div>
          <ul className="feed_posts d-md-flex flex-wrap">
            {news.map((news) => {
              return <BlogPost news={news} />;
            })}
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
