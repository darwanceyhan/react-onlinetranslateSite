import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="global.css" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="linear-bg appear">
        <div className="container">
          <div className="grid xl:grid-cols-2 sm:grid-cols-2 gap-4 mt-20">
            <div className="text-3xl font-bold mx-10 flex md:mx-20 text-center cursor-pointer hover:scale-105 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                />
              </svg>
              <h1 className="text-center flex">ONLİNE TRANSLATE</h1>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 text-center">
              <div></div>
              <div className="grid grid-cols-3 gap-10">
                <Link href="/">
                  <button className="hover-underline-animation text-base border-l-2 border-black pl-2">
                    Anasayfa
                  </button>
                </Link>
                <Link href="/login">
                  <button className="hover-underline-animation text-base border-l-2 border-black pl-2">
                    Giriş Yap
                  </button>
                </Link>
                <Link href="/">
                  <button className="hover-underline-animation text-base border-l-2 border-black pl-2">
                    İletişim
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {children}
        <footer className="h-28 mt-40 grid">
          <div className="mt-20 bg-black grid text-white w-auto h-full text-center text-base content-center">
            <h1>ONLINE TRANSLATE © 2023. Tüm hakları saklıdır. | </h1>
          </div>
        </footer>
      </body>
    </html>
  );
}
