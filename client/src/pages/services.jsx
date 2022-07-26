import AllCropService from "@/components/AllCropService";

const Services = () => {
  return (
    <>
      <main className="services section">
        <div className="container d-flex flex-column flex-xl-row flex-lg-wrap justify-content-between">
          <div className="services_header col-xl-6 section_header">
            <h2 className="services_header-title section_header-title" data-aos="fade-right">
              We provide the highest quality service
            </h2>
            <span
              className="services_header-subtitle section_header-subtitle"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-once="false"
            >
              Services
            </span>
          </div>
          <p className="services_text text col-xl-6" data-aos="fade-left">
            Eget ut sodales arcu aliquet diam nec laoreet fames. Urna, eu pharetra consequat,
            euismod iaculis tristique maecenas. Et enim iaculis suscipit nunc ultricies nunc fames.
            Phasellus massa, sed.
          </p>
          <ul className="services_list flex-grow-1 d-md-flex flex-wrap">
            <AllCropService />
          </ul>
        </div>
      </main>
    </>
  );
};

export default Services;
