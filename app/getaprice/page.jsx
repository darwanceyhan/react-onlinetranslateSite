"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import mammoth from "mammoth";
import JSZip from "jszip";

function GetaPrice() {
  const [level, setLevel] = useState([true, false, false]);
  const [count, setCount] = useState(0);
  const [language, setLanguage] = useState(null);
  const [price, setPrice] = useState(null);
  useEffect(() => {
    console.log(mammoth);
  }, []);

  async function readDocxAndTxtFile(file) {
    const reader = new FileReader();
    const content = await new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new Error("Failed to read file"));
      };

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsArrayBuffer(file);
    });

    const buffer = new Uint8Array(content);
    const type = file.type;
    let text;

    if (
      type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const zip = await JSZip.loadAsync(buffer);
      const doc = await zip.file("word/document.xml").async("string");
      const matches = doc.match(/<w:t[^>]*>(.*?)<\/w:t>/g);
      text = matches
        ? matches.map((match) => match.replace(/<\/?w:t[^>]*>/g, "")).join(" ")
        : "";
    } else if (type === "text/plain") {
      text = new TextDecoder().decode(buffer);
    } else {
      throw new Error("Invalid file type");
    }

    const wordCount = text.split(/\s+/).length;
    console.log(wordCount);
    return wordCount;
  }
  return (
    <div className="w-full h-3/6 mx-auto mt-56">
      <div className="w-4/5 h-2/5 grid grid-cols-1 sm:grid-cols-3 mx-auto">
        <div
          className={`${
            level[0]
              ? "bg-black mx-auto w-full grid content-center"
              : "mx-auto w-full grid content-center"
          } `}
        >
          <div
            className={`${
              level[0]
                ? "bg-white w-10 h-10 mx-auto grid content-center text-center rounded-full"
                : "bg-black text-white w-10 h-10 mx-auto grid content-center text-center rounded-full"
            }  `}
            style={{ borderRadius: "50%" }}
          >
            1
          </div>
          <h1
            className={`${
              level[0] ? "text-white" : "text-black"
            } "font-bold text-xl sm:text-2xl text-center `}
          >
            Dosya Yükle
          </h1>
          <p
            className={`${
              level[0] ? "text-white" : "text-black"
            } "text-sm sm:text-base text-center"
           }`}
          >
            Dosyanızı yükleyin ve hangi dilde çevrileceğini seçin.
          </p>
        </div>
        <div
          className={`${
            level[1]
              ? "bg-black mx-auto w-full grid content-center"
              : "mx-auto w-full grid content-center"
          } `}
        >
          <div
            className={`${
              level[1]
                ? "bg-white w-10 h-10 mx-auto grid content-center text-center rounded-full"
                : "bg-black text-white w-10 h-10 mx-auto grid content-center text-center rounded-full"
            }  `}
            style={{ borderRadius: "50%" }}
          >
            2
          </div>
          <h1
            className={`${
              level[1] ? "text-white" : "text-black"
            } "font-bold text-xl sm:text-2xl text-center `}
          >
            Paket Seç
          </h1>
          <p
            className={`${
              level[1]
                ? "text-white text-sm sm:text-base text-center"
                : "text-black text-sm sm:text-base text-center"
            }
           }`}
          >
            Çeviri paketlerimizden birini seçin.
          </p>
        </div>
        <div
          className={`${
            level[2]
              ? "bg-black mx-auto w-full grid content-center"
              : "mx-auto w-full grid content-center"
          } `}
        >
          <div
            className={`${
              level[2]
                ? "bg-white w-10 h-10 mx-auto grid content-center text-center rounded-full"
                : "bg-black text-white w-10 h-10 mx-auto grid content-center text-center rounded-full"
            }  `}
            style={{ borderRadius: "50%" }}
          >
            3
          </div>
          <h1
            className={`${
              level[2] ? "text-white" : "text-black"
            } "font-bold text-xl sm:text-2xl text-center `}
          >
            Ödeme Yap
          </h1>
          <p
            className={`${
              level[2]
                ? "text-white text-sm sm:text-base text-center"
                : "text-black text-sm sm:text-base text-center"
            }
           }`}
          >
            Ödeme işlemini tamamlayın.
          </p>
        </div>
      </div>

      {level[0] ? (
        <div className="w-4/5 h-3/5 grid grid-cols-1 sm:grid-cols-2 mx-auto mt-10 sm:mt-10 place-content-center">
          <div className="mx-auto">
            <input
              onChange={(e) => {
                readDocxAndTxtFile(e.target.files[0]).then((text) => {
                  setCount(text);
                });
              }}
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
                <button
                  className="hover-underline-animation text-base sm:text-xl  border-l-2 border-black mt-20 pl-4 p-2 text-center text-black font-bold flex justify-end"
                  onClick={() => {
                    setLevel([false, true, false]);
                  }}
                >
                  Sonraki Adım
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {
        //level 2 , cards
        level[1] ? (
          <div className="w-4/5 h-3/5 grid grid-cols-1 mx-auto mt-52 sm:mt-20 place-content-center">
            <div className="mx-auto grid grid-cols-2 mt-20">
              <div className="grid bg-neutral-300 w-3/6 mx-auto items-center p-4 pb-8 sm:p-4 lg:p-8 dark:bg-gray-900">
                <span className="text-sm text-center font-semibold">Basic</span>
                <p className="text-5xl font-bold text-center">39€</p>
                <ul className="list-disc">
                  <li className="text-md font-semibold text-center mt-10">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-md font-semibold text-center mt-10">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-md font-semibold text-center mt-10">
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="text-md font-semibold text-center mt-10">
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
                <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 dark:border-gray-700">
                  Sign up
                </button>
              </div>
              <div className="grid bg-neutral-300 w-3/6 items-center mx-auto p-4 pb-8 text-center rounded-md sm:p-8 lg:p-8 dark:bg-violet-400 dark:text-gray-900">
                <span className="text-sm font-semibold">Advanced</span>
                <p className="text-5xl font-bold">89€</p>
                <p className="font-semibold">
                  Nemo deserunt possimus quo provident recusandae! Dolores qui
                  architecto omnis pariatur eos voluptatibus sequi cum, non
                  nesciunt aspernatur a?
                </p>
                <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-gray-800 dark:text-gray-50">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        ) : null
      }
    </div>
  );
}
export default GetaPrice;
