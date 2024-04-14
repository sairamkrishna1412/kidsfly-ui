"use client";

// import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import jeep from "@/public/images/category_jeep_new.png";
import jeepBlue from "@/public/images/jeep_blue.png";
import jeepRed from "@/public/images/jeep_red.png";
import { FaCircleChevronRight } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden">
      <div className="" ref={emblaRef}>
        <div className="flex">
          <div className="flex justify-center flex-initial flex-grow-0 flex-shrink-0 w-full min-w-0">
            <Image src={jeep} alt={"Product Image"} width={720}></Image>
          </div>
          <div className="flex justify-center flex-initial flex-grow-0 flex-shrink-0 w-full min-w-0">
            <Image src={jeepBlue} alt={"Product Image"} width={720}></Image>
          </div>
          <div className="flex justify-center flex-initial flex-grow-0 flex-shrink-0 w-full min-w-0">
            <Image src={jeepRed} alt={"Product Image"} width={720}></Image>
          </div>
        </div>
      </div>
      <div className="text-lg">
        <button className="absolute top-[45%] left-2 p-2" onClick={scrollPrev}>
          <GrPrevious />
        </button>
        <button className="absolute top-[45%] right-2 p-2" onClick={scrollNext}>
          <GrNext />
        </button>
      </div>
    </div>
  );
}
