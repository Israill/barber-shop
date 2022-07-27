const Admin = () => {
  return(
    <section>
      <div className="pt-36 text-center">
        <h2>Админ панель</h2>
        <hr className="w-2/4 m-auto mt-2 border-2" />
      </div>
      <div className="flex flex-wrap flex-row mt-3 lg:justify-between w-2/4 m-auto justify-center">
        <button className="bg-red-600 text-white p-2 rounded-sm w-40 hover:bg-gray-900">
          Новости
        </button>
        <button className="bg-red-600 text-white p-2 rounded-sm w-40 hover:bg-gray-900">
          Магазин
        </button>
        <button className="bg-red-600 text-white p-2 rounded-sm w-40 hover:bg-gray-900">
          Барберы
        </button>
        <button className="bg-red-600 text-white p-2 rounded-sm w-40 hover:bg-gray-900">
          Галлерея
        </button>
      </div>
    </section>
  )
}

export default Admin;