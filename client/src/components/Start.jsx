const Start = () => {
  return (
    <section className="promo section">
      <div className="container">
        <div className="promo_content">
          <h2 className="promo_content-header" data-aos="fade-left">
            Ready to transform?
          </h2>
          <p className="promo_content-text text" data-aos="fade-right">
            Tincidunt ante faucibus in dui quam aliquam integer nunc neque. Augue in nullam urna
            nulla. Sed nisi habitant elementum cras duis placerat egestas nisl. Vestibulum molestie
            tellus facilisi id. Sed id.
          </p>
          <div className="wrapper" data-aos="fade-up">
            <a className="promo_content-btn btn theme-element" href="#">
              Book now
            </a>
          </div>
        </div>
      </div>
      <span className="overlay"></span>
    </section>
  );
};

export default Start;
