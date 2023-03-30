"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import mammoth from "mammoth";
import JSZip from "jszip";

function GetaPrice() {
  const [level, setLevel] = useState([true, false, false]);
  const [count, setCount] = useState(0);
  const [language, setLanguage] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
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
      <div className="w-4/5 h-3/5 sm:h-2/5 grid grid-cols-1 sm:grid-cols-3 mx-auto">
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
              level[0]
                ? "text-white text-sm sm:text-base text-center"
                : "text-black text-sm sm:text-base text-center"
            }
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
          <div className="w-4/5 h-3/5 grid grid-cols-1 mx-auto mt-52 sm:mt-40 place-content-center">
            <div class="container m-auto">
              <div class="flex flex-wrap items-center justify-center w-full text-center">
                <div class="w-full md:w-1/2 lg:w-1/3 p-4 ">
                  <div class="flex flex-col rounded border-2 cardBoxShadow">
                    <div class="py-5 text-black bg-white">
                      <h3>Standart</h3>
                      <p class="text-5xl font-bold">
                        $19.<span class="text-3xl">95</span>
                      </p>
                    </div>
                    <div class="py-5 bg-black text-white rounded-b">
                      <p>Feature of the plan</p>
                      <p>Another feature plan feature</p>
                      <p>Yet another plan feature</p>
                      <button
                        onClick={() => {
                          setIsUploaded([true, false, false]);
                        }}
                        class="px-5 py-2 mt-5 uppercase rounded bg-white text-black font-semibold hover:bg-slate-300"
                      >
                        {isUploaded[0] ? "SEÇİLDİ" : "SEÇ"}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/3 p-4 ">
                  <div class="flex flex-col rounded cardBoxShadow">
                    <div class="py-7 bg-white text-black rounded-t">
                      <h2 class="uppercase font-extrabold">En Popüler!!!</h2>
                      <h3>Standard + Hızlandırılmış</h3>
                      <p class="text-5xl font-bold">
                        $49.<span class="text-3xl">95</span>
                      </p>
                    </div>
                    <div>
                      <div class="pt-1 pb-7 bg-black text-white rounded-b">
                        <p>Feature of the plan</p>
                        <p>Another feature plan feature</p>
                        <p>Yet another plan feature</p>
                        <button
                          onClick={() => {
                            setIsUploaded([false, true, false]);
                          }}
                          class="px-5 py-2 mt-5 uppercase rounded bg-white text-black font-semibold hover:bg-slate-300"
                        >
                          {isUploaded[1] ? "SEÇİLDİ" : "SEÇ"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/3 p-4 ">
                  <div class="flex flex-col rounded border-2 cardBoxShadow">
                    <div class="py-5 text-black bg-white">
                      <h3>Geniş Paket + Hızlandırılmış</h3>
                      <p class="text-5xl font-bold">
                        $89.<span class="text-3xl">95</span>
                      </p>
                    </div>
                    <div class="py-5 bg-black text-white rounded-b">
                      <p>Feature of the plan</p>
                      <p>Another feature plan feature</p>
                      <p>Yet another plan feature</p>
                      <button
                        onClick={() => {
                          setIsUploaded([false, false, true]);
                        }}
                        class="px-5 py-2 mt-5 uppercase rounded bg-white text-black font-semibold hover:bg-slate-300"
                      >
                        {isUploaded[2] ? "SEÇİLDİ" : "SEÇ"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </div>
  );
}
export default GetaPrice;
