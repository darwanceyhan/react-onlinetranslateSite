import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="global.css" />
      </head>
      <body>
        <div className="container">
          <div className="grid xl:grid-cols-2 sm:grid-cols-2 gap-4 mt-20">
            <div className="text-3xl font-bold mx-10 flex md:mx-20 text-center">
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
              <div className="grid grid-cols-2 gap-5">
                <div className="text-center">İletişim</div>
                <div className="text-center">Hakkımızda</div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
