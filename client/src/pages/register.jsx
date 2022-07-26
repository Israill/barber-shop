import Link from 'next/link';

const Register = () => {
  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
        <h1 className="text-lg font-bold">Регистрация</h1>
        <form className="flex flex-col mt-4">
          <input
            type="text"
            name="full-name"
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Полное имя"
          />
          <input
            type="email"
            name="email"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Электронный адрес"
          />
          <input
            type="password"
            name="password"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Пароль"
          />
          <button
            type="submit"
            className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex w-full justify-center items-center font-medium focus:outline-none"
          >
            Зарегистрироваться
          </button>
          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light text-gray-500">
              Уже зарегистрированы?
              <Link href={'/register'}>
                <a className="ml-1 font-medium text-blue-400">Войти</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
