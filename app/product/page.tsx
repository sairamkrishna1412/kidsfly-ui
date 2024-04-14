import Image from "next/image";

import { IoIosSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { poppins, cookie } from "@/app/ui/fonts";
import logo from "@/public/images/logo.png";
import jeep from "@/public/images/category_jeep_new.png";
import jeepBlue from "@/public/images/jeep_blue.png";
import jeepRed from "@/public/images/jeep_red.png";
import { FaAngleRight } from "react-icons/fa6";
import ProductCarousel from "../ui/product/carousel";
import { MdExpandCircleDown } from "react-icons/md";
import Dropdown from "../ui/common/dropdown/dropdown";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function Product() {
  var sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`${poppins.className} bg-white text-gray-900`}>
      <div className="flex justify-between items-center shadow-md py-2 px-16 h-[10vh]">
        <Image src={logo} alt="Logo" width={65} height={30}></Image>
        <nav className="text-[15px]">
          <ul className="flex justify-center space-x-8 text-gray-600 ">
            <li className="cursor-pointer border-b-2 border-b-transparent hover:border-b-pink-400 hover:text-pink-400 transition ease-in-out">
              HOME
            </li>
            <li className="cursor-pointer border-b-2 border-b-transparent hover:border-b-yellow-400 hover:text-yellow-400 transition ease-in-out">
              SHOP
            </li>
            <li className="cursor-pointer border-b-2 border-b-transparent hover:border-b-green-400 hover:text-green-400 transition ease-in-out">
              CARS
            </li>
            <li className="cursor-pointer border-b-2 border-b-transparent hover:border-b-red-400 hover:text-red-400 transition ease-in-out">
              BIKES
            </li>
            <li className="cursor-pointer border-b-2 border-b-transparent hover:border-b-blue-400 hover:text-blue-400 transition ease-in-out">
              CYCLES
            </li>
            <li className="cursor-pointer border-b-2 border-b-transparent hover:border-b-purple-400 hover:text-purple-400 transition ease-in-out">
              PAGES
            </li>
            <li className="cursor-pointer border-b-2 border-b-transparent hover:border-b-orange-400 hover:text-orange-400 transition ease-in-out">
              CONTACT
            </li>
          </ul>
        </nav>
        <div className="flex justify-between items-center">
          <div className="text-[12px] text-gray-600 mr-2">
            <a href="#">Login / </a>
            <a href="#">Register</a>
          </div>
          <ul className="flex space-x-4 text-[1.5rem]">
            <li>
              <a href="#">
                <IoIosSearch className="text-purple-400" />
              </a>
            </li>
            <li className="">
              <a href="#">
                <IoHeartOutline className="text-purple-400" />
              </a>
            </li>
            <li>
              <a href="shoping-cart.html">
                <IoCartOutline className="text-purple-400" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container 2xl:max-w-[70%] mx-auto">
        <div className=" pt-[2vh] pb-[5vh] text-xs">
          <p className="flex items-center gap-2 text-gray-500">
            Home <FaAngleRight />
            Kids <FaAngleRight />
            <span className="text-gray-800">Ride On Jeep</span>
          </p>
        </div>
        <div className="flex gap-[1vw]">
          <div className="flex gap-[1vw] w-2/3">
            <div className="flex flex-col gap-[2vh]">
              <div className="border-transparent border cursor-pointer p-1 hover:border-gray-300 transition-all">
                <Image src={jeep} alt={"Product image"} width={120}></Image>
              </div>
              <div className="border-transparent border cursor-pointer p-1 hover:border-gray-300 transition-all">
                <Image src={jeepBlue} alt={"Product image"} width={120}></Image>
              </div>
              <div className="border-transparent border cursor-pointer p-1 hover:border-gray-300 transition-all">
                <Image src={jeepRed} alt={"Product image"} width={120}></Image>
              </div>
            </div>
            <div className="">
              <ProductCarousel></ProductCarousel>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-5">
            <h1 className="text-[22px] text-gray-900">Ride on Jeep</h1>
            <p className="text-lg font-semibold">₹7999</p>
            <p className="text-sm text-gray-600">
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
              ligula. Mauris consequat ornare feugiat.
            </p>
            <div className="flex flex-col gap-7">
              <Dropdown
                title="Age"
                options={[
                  { show: "3-6", value: "3-6" },
                  { show: "6-9", value: "6-9" },
                  { show: "9-12", value: "9-12" },
                ]}
              ></Dropdown>
              <Dropdown
                title="Color"
                options={[
                  { show: "White", value: "white" },
                  { show: "Red", value: "red" },
                  { show: "Blue", value: "blue" },
                ]}
              ></Dropdown>
              <div className="flex items-center gap-12 text-gray-600 w-full">
                <p className="!w-[15%]"></p>
                <div className="flex items-center w-full text-lg cursor-pointer">
                  <div className="border w-11 h-11 flex justify-center items-center">
                    <AiOutlineMinus />
                  </div>
                  <div className="border  w-11 h-11 flex justify-center items-center">
                    1
                  </div>
                  <div className="border  w-11 h-11 flex justify-center items-center">
                    <AiOutlinePlus />
                  </div>
                </div>
              </div>
              <button className="px-4 py-3 text-white bg-app_purple">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="pb-96 bg-black"></div>
      </div>
    </div>
  );
}
