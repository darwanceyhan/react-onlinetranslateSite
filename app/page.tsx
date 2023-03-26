"use client";
import Image from "next/image";
import tranlsateSVG from "../public/translate.svg";
import rocketSVG from "../public/rocket.svg";
import piggySVG from "../public/piggy.svg";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const myRef1 = useRef<HTMLDivElement>(null);
  const myRef2 = useRef<HTMLDivElement>(null);
  const myRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Ref 1
      const element1 = myRef1.current;
      if (element1) {
        const elementRect1 = element1.getBoundingClientRect();
        const viewRect1 = {
          top: 0,
          left: 0,
          bottom: window.innerHeight,
          right: window.innerWidth,
        };
        const isIntersecting1 =
          elementRect1.bottom >= 0 && elementRect1.top <= viewRect1.bottom;
        if (isIntersecting1) {
          setIsVisible1(true);
        }
      }

      // Ref 2
      const element2 = myRef2.current;
      if (element2) {
        const elementRect2 = element2.getBoundingClientRect();
        const viewRect2 = {
          top: 0,
          left: 0,
          bottom: window.innerHeight,
          right: window.innerWidth,
        };
        const isIntersecting2 =
          elementRect2.bottom >= 0 && elementRect2.top <= viewRect2.bottom;

        if (isIntersecting2) {
          setIsVisible2(true);
        }
      }

      // Ref 3
      const element3 = myRef3.current;
      if (element3) {
        const elementRect3 = element3.getBoundingClientRect();
        const viewRect3 = {
          top: 0,
          left: 0,
          bottom: window.innerHeight,
          right: window.innerWidth,
        };
        const isIntersecting3 =
          elementRect3.bottom >= 0 && elementRect3.top <= viewRect3.bottom;
        if (isIntersecting3) {
          setIsVisible3(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mt-52 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div ref={myRef1}>
          {
            // Ref 1
            isVisible1 ? (
              <div ref={myRef1} className="appear mt-40 sm:mt-0">
                <Image
                  src={tranlsateSVG}
                  alt="translate"
                  width={150}
                  height={150}
                  className="mx-auto"
                />

                <p className="text-center mt-24">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur suscipit quod unde corporis delectus similique
                  enim odio vel saepe maxime modi, perspiciatis officiis
                  incidunt natus officia, voluptate, quia, voluptas quas.
                </p>
              </div>
            ) : null
          }
        </div>
        <div ref={myRef2}>
          {
            // Ref 2
            isVisible2 ? (
              <div ref={myRef2} className="appear mt-40 sm:mt-0">
                <Image
                  src={rocketSVG}
                  alt="rocket"
                  width={150}
                  height={150}
                  className="mx-auto"
                />

                <p className="text-center mt-24">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur suscipit quod unde corporis delectus similique
                  enim odio vel saepe maxime modi, perspiciatis officiis
                  incidunt natus officia, voluptate, quia, voluptas quas.
                </p>
              </div>
            ) : null
          }
        </div>

        <div ref={myRef3}>
          {
            // Ref 3
            isVisible3 ? (
              <div ref={myRef3} className="appear mt-40 sm:mt-0">
                <Image
                  src={piggySVG}
                  alt="piggy"
                  width={150}
                  height={150}
                  className="mx-auto"
                />

                <p className="text-center mt-24">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur suscipit quod unde corporis delectus similique
                  enim odio vel saepe maxime modi, perspiciatis officiis
                  incidunt natus officia, voluptate, quia, voluptas quas.
                </p>
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  );
}
