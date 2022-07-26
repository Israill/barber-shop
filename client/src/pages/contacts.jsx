const Contacts = () => {
  return (
    <>
      <main>
        <section className="contacts section">
          <div className="container">
            <div className="contacts_header section_header">
              <h2 className="contacts_header-title section_header-title" data-aos="fade-right">
                Let’s talk or book now
              </h2>
              <span
                className="contacts_header-subtitle section_header-subtitle"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-once="false"
              >
                Contacts
              </span>
            </div>
            <div className="contacts_main d-flex flex-column flex-lg-row justify-content-between">
              <ul className="contacts_main-data">
                <li className="contacts_main-data_item">
                  <h3 className="title">Email</h3>
                  <a className="data link link--underline" href="mailto:example@domain.com">
                    barbercrop@example.com
                  </a>
                </li>
                <li className="contacts_main-data_item">
                  <h3 className="title">Address</h3>
                  <span className="data">
                    3891 Ranchview Dr. Richardson,{' '}
                    <span className="linebreak">California 62639</span>
                  </span>
                </li>
                <li className="contacts_main-data_item contacts_main-data_item--tel">
                  <h3 className="title">Phone</h3>
                  <div className="wrapper d-flex flex-column flex-md-row">
                    <a className="data link link--underline" href="tel:+1234567890">
                      +1 234 567 890
                    </a>
                    <a className="data link link--underline" href="tel:+1234567890">
                      +1 234 567 890
                    </a>
                  </div>
                </li>
              </ul>
              <form
                className="contacts_main-form d-flex flex-column flex-md-row flex-wrap justify-content-between col-lg-8"
                action="#"
                method="post"
                data-type="feedback"
                autoComplete="off"
              >
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsName">
                    Name and surname *
                  </label>
                  <input
                    className="field field--corner required"
                    type="text"
                    id="contactsName"
                    name="contactsName"
                    placeholder="Your name here"
                  />
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsService">
                    Choose a service *
                  </label>
                  <div className="field-wrapper_block">
                    <select name="contactsService" id="contactsService">
                      <option value="haircut">Haircut</option>
                      <option value="dyeing">Hair dyeing</option>
                      <option value="trim">Beard trim</option>
                      <option value="stacking">Stacking</option>
                      <option value="shave">Shave</option>
                      <option value="mustache">Mustache</option>
                    </select>
                  </div>
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsTel">
                    Your phone number *
                  </label>
                  <input
                    className="field field--corner required"
                    data-type="tel"
                    type="text"
                    name="contactsTel"
                    id="contactsTel"
                    placeholder="Your phone here"
                  />
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsDate">
                    Choose an appointment date
                  </label>
                  <input
                    className="field field--corner optional"
                    data-type="date"
                    type="text"
                    id="contactsDate"
                    name="contactsDate"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsMessage">
                    Message
                  </label>
                  <textarea
                    className="field field--corner optional"
                    id="contactsMessage"
                    name="contactsMessage"
                    placeholder="Your message here"
                    data-type="message"
                  ></textarea>
                </div>
                <button className="btn theme-element" type="submit">
                  Book now
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="map">
          <div id="map"></div>
        </div>
      </main>
    </>
  );
};

export default Contacts;
