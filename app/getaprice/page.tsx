"use client";
import React from "react";
import { useState } from "react";

const GetaPrice = () => {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState(null);
  const [price, setPrice] = useState(null);
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
          <p className="text-white text-base text-center mt-2">
            Dosyanızı yükleyin ve hangi dilde çevrileceğini seçin.
          </p>
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
      <div className="w-4/5 h-3/5 grid grid-cols-1 sm:grid-cols-2 mx-auto mt-10 sm:mt-10 place-content-center">
        <div className="mx-auto">
          <input
            accept=".docx, .txt, .doc"
            type="file"
            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-black file:text-white
      hover:file:bg-slate-500
    "
            multiple
          />
        </div>
        <div className="mx-auto grid grid-cols-2 gap-10 mt-10 sm:mt-0">
          <div className="mx-auto">
            <select className=" w-full text-sm text-slate-500">
              <option value="" selected>
                Hangi dilden
              </option>
              <option value="tr">Türkçe</option>
              <option value="en">İngilizce</option>
              <option value="de">Almanca</option>
              <option value="fr">Fransızca</option>
              <option value="es">İspanyolca</option>
              <option value="it">İtalyanca</option>
              <option value="ru">Rusça</option>
              <option value="ar">Arapça</option>
            </select>
          </div>
          <div className="mx-auto">
            <select className=" w-full text-sm text-slate-500">
              <option value="" selected>
                Hangi dile
              </option>
              <option value="tr">Türkçe</option>
              <option value="en">İngilizce</option>
              <option value="de">Almanca</option>
              <option value="fr">Fransızca</option>
              <option value="es">İspanyolca</option>
              <option value="it">İtalyanca</option>
              <option value="ru">Rusça</option>
              <option value="ar">Arapça</option>
            </select>
            <div>
              <button className="hover-underline-animation text-base sm:text-xl  border-l-2 border-black mt-20 pl-4 p-2 text-center text-black font-bold flex justify-end">
                Sonraki Adım
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetaPrice;
