import { useRouter } from 'next/router'
import { selectIsAuth } from "../redux/slice/auth";
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { FileUploader } from "react-drag-drop-files";

import React from "react";


const fileTypes = ["JPEG", "PNG", "GIF", "JPG"];

const Admin = () => {
  const router = useRouter()
  const isAuth = useSelector(selectIsAuth)
  const user = useSelector((state) => state.auth)
  const [openTab, setOpenTab] = React.useState(1);
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  useEffect(() => {
    if (!isAuth && user === false) {
      router.push('/error')
    }
  }, [])

  return(
    <section>
      <div className="pt-36 text-center">
        <h2>Админ панель</h2>
        <hr className="w-2/4 m-auto mt-2 border-2" />
      </div>
        <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row w-2/4 m-auto justify-center"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Новости
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Магазин
              </a>
            </li>
            <li className="-mb-px !mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Галлерея
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-3/4 m-auto mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div>
          <div className="md:col-span-2">
            <form action="#" method="POST">
                <div>
                    <label htmlFor="header" className="block text-sm font-medium text-white">
                      Заголовок
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="header"
                        name="header"
                        rows={3}
                        className="shadow-sm mt-1 block w-full sm:text-sm rounded-md"
                        placeholder="Ваш текст"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-white">
                      Текст
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm mt-1 block w-full sm:text-sm rounded-md"
                        placeholder="Ваш текст"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white">Фото</label>
                    <div className="mt-1 pt-2">
                        <FileUploader
                          multiple={true}
                          handleChange={handleChange}
                          name="file"
                          classes="flex justify-center !px-16 !py-16 !border-2 !border-red-700 !border-dashed !rounded-md"
                          label="Загрузите фото или перетащите"
                          hoverTitle="+"
                          types={fileTypes}
                        />
                        <p>{file ? `Название: ${file[0].name}` : "фото еще не загружено"}</p>
                    </div>
                  </div>
              </form>
            </div>
            </div>
          </div>


{/* 2 */}





                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore quae vero? Doloribus voluptatum error voluptate illum explicabo temporibus assumenda asperiores maiores.
                  </p>
                </div>




{/* 3 */}





                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa necessitatibus voluptates beatae asperiores id aperiam iure magnam ex in aliquam provident numquam dolorum eius, rem quibusdam totam veniam consequuntur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admin;
