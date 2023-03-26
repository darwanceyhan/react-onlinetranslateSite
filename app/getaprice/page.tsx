import React from "react";

const GetaPrice = () => {
  return (
    <div className="w-full h-3/6 mx-auto mt-56">
      <div className="w-4/5 h-2/5 grid grid-cols-1 sm:grid-cols-3 mx-auto">
        <div className="mx-auto bg-black w-full grid content-center">
          <div
            className="w-10 h-10 mx-auto bg-white grid content-center text-black text-center rounded-full"
            style={{ borderRadius: "50%" }}
          >
            1
          </div>
          <h1 className="font-bold text-xl sm:text-2xl text-center text-white">
            Dosya Yükle
          </h1>
        </div>
        <div className="mx-auto">
          <div
            className="w-10 h-10 mx-auto bg-black grid content-center text-white text-center rounded-full"
            style={{ borderRadius: "50%" }}
          >
            2
          </div>
        </div>
        <div className="mx-auto">
          <div
            className="w-10 h-10 mx-auto bg-black grid content-center text-white text-center rounded-full"
            style={{ borderRadius: "50%" }}
          >
            3
          </div>
        </div>
      </div>
      <div className="w-4/5 h-3/5 mx-auto mt-10 sm:mt-10">
        <input
          type="file"
          className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
        />
      </div>
    </div>
  );
};
export default GetaPrice;
