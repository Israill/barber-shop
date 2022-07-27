const Contacts = () => {
  return (
    <>
      <main>
        <section className="contacts section">
          <div className="container !mt-24">
            <div className="contacts_header section_header">
              <h2 className="contacts_header-title section_header-title !mb-4" data-aos="fade-right">
                Забронируйте прямо сейчас
              </h2>
              <span
                className="contacts_header-subtitle section_header-subtitle"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-once="false"
              >
                Контакты
              </span>
            </div>
            <div className="contacts_main d-flex flex-column flex-lg-row justify-content-between">
              <ul className="contacts_main-data">
                <li className="contacts_main-data_item">
                  <h3 className="title">Электронная почта</h3>
                  <a className="data link link--underline">
                    eduard.shaipov@yandex.ru
                  </a>
                </li>
                <li className="contacts_main-data_item">
                  <h3 className="title">Адрес</h3>
                  <span className="data">
                  просп. Кадырова, 34, Грозный,{' '}
                    <span className="linebreak">Чеченская Республика 364061</span>
                  </span>
                </li>
                <li className="contacts_main-data_item contacts_main-data_item--tel">
                  <h3 className="title">Телефон</h3>
                  <div className="wrapper d-flex flex-column flex-md-row">
                    <a className="data link link--underline" href="tel:+79640009595">
                      +7 964 000 95 95
                    </a>
                    <a className="data link link--underline !ml-3" href="tel:+79650009596">
                      +7 965 000 95 96
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
                    Полное имя*
                  </label>
                  <input
                    className="field field--corner required"
                    type="text"
                    id="contactsName"
                    name="contactsName"
                    placeholder="тут"
                  />
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsService">
                  Выберите услугу *
                  </label>
                  <div className="field-wrapper_block">
                    <select name="contactsService" id="contactsService">
                      <option value="haircut">Стрижка волос</option>
                      <option value="dyeing">Покраска волос</option>
                      <option value="trim">Стрижка бороды</option>
                      <option value="stacking">Укладка</option>
                      <option value="shave">Бритье</option>
                      <option value="mustache">Усы</option>
                    </select>
                  </div>
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsTel">
                    Ваш номер телефона *
                  </label>
                  <input
                    className="field field--corner required"
                    data-type="tel"
                    type="text"
                    name="contactsTel"
                    id="contactsTel"
                    placeholder="номер телефона"
                  />
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsDate">
                    Выберите дату встречи
                  </label>
                  <input
                    className="field field--corner optional"
                    data-type="date"
                    type="text"
                    id="contactsDate"
                    name="contactsDate"
                    placeholder="день/месяц/год"
                  />
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsMessage">
                    Сообщение
                  </label>
                  <textarea
                    className="field field--corner optional"
                    id="contactsMessage"
                    name="contactsMessage"
                    placeholder="ваш текст здесь"
                    data-type="message"
                  ></textarea>
                </div>
                <button className="btn theme-element" type="submit">
                  Забронировать
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
