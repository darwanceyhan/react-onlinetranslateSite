import React from "react";

const Login = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 h-4/5 mt-40 mx-auto mb-20 sm:mb-0">
      <div className="rightBorderWidthAnimation">
        <div className="w-3/5 h-3/5 mx-auto mt-10 sm:mt-5 ">
          <div className="boxShadow p-5 sm:p-10">
            <h1 className="text-center text-2xl font-bold">Giriş Yap</h1>
            <form className="mt-10">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 mb-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Şifre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Şifre"
                />

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Giriş Yap
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="w-3/5 h-3/5 mx-auto mt-10 sm:mt-5 ">
          <div className="boxShadow p-5 sm:p-10">
            <h1 className="text-center text-2xl font-bold">Kayıt Ol</h1>
            <form className="mt-10">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Ad
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 mb-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Ad"
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Soyad
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 mb-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="surname"
                  type="text"
                  placeholder="Soyad"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 mb-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Şifre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Şifre"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Şifre Tekrar
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Şifre Tekrar"
                />

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Kayıt Ol
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
