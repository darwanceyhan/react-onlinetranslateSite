"use client";
import Image from "next/image";
import tranlsateSVG from "../public/translate.svg";
import rocketSVG from "../public/rocket.svg";
import piggySVG from "../public/piggy.svg";
import { useEffect, useRef, useState } from "react";

export default function Home() {
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
          element1.classList.replace("hidden", "appear");
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
          element2.classList.replace("hidden", "appear");
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
          document;
          element3.classList.replace("hidden", "appear");
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
        <div ref={myRef1} className="hidden">
          <Image
            src={tranlsateSVG}
            alt="translate"
            width={150}
            height={150}
            className="mx-auto"
          />

          <p className="text-center mt-24">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur suscipit quod unde corporis delectus similique enim odio
            vel saepe maxime modi, perspiciatis officiis incidunt natus officia,
            voluptate, quia, voluptas quas.
          </p>
        </div>
        <div ref={myRef2} className="hidden">
          <Image
            src={rocketSVG}
            alt="rocket"
            width={150}
            height={150}
            className="mx-auto"
          />

          <p className="text-center mt-24">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur suscipit quod unde corporis delectus similique enim odio
            vel saepe maxime modi, perspiciatis officiis incidunt natus officia,
            voluptate, quia, voluptas quas.
          </p>
        </div>
        <div ref={myRef3} className="hidden">
          <Image
            src={piggySVG}
            alt="piggy"
            width={150}
            height={150}
            className="mx-auto"
          />

          <p className="text-center mt-24">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur suscipit quod unde corporis delectus similique enim odio
            vel saepe maxime modi, perspiciatis officiis incidunt natus officia,
            voluptate, quia, voluptas quas.
          </p>
        </div>
      </div>
    </div>
  );
}
