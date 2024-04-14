import React from "react";
import Image from "next/image";
import rideOn from "@/public/images/ride-ons-car.jpg";
import justBorn from "@/public/images/kidsfly_just_born.jpg";
import kids2to4 from "@/public/images/kidsfly_kids_2_4.jpg";
import teenagers from "@/public/images/teenager.jpg";
import gifts from "@/public/images/category-5.jpg";
import logo from "@/public/images/logo.png";
import categoryBike from "@/public/images/category_bikes_new.png";
import categoryCar from "@/public/images/category_cars_new.png";
import categoryJeep from "@/public/images/category_jeep_new.png";
import ProductBike from "@/public/images/bike_product.png";

import { IoIosSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { poppins, cookie } from "@/app/ui/fonts";
import styles from "./home.module.css";
import Category from "../ui/home/category";
import Product from "../ui/home/product/product";
import { IoFilterOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const HomePage = () => {
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

      <div className="h-[90vh] mx-auto py-[1vh]">
        <div className="grid md:grid-cols-5 lg:grid-cols-2 gap-[1vh]">
          <div
            className="flex flex-col justify-center pl-12"
            style={{
              boxSizing: "border-box",
              backgroundImage: `url(${rideOn.src})`,
              backgroundSize: "cover",
              backgroundPosition: "10%",
              backgroundRepeat: "no-repeat",
              height: "89vh",
            }}
          >
            <h2
              className={`${cookie.className} antialiased text-7xl font-normal mb-2`}
            >
              Ride on&apos;s
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
              <br />
              incidid-unt labore edolore magna aliquapendisse ultrices gravinda
            </p>
            <button className="text-left">
              <span className="text-sm font-bold border-b-2 border-b-red-400 hover:text-red-400 transition ease-in-out">
                SHOP NOW
              </span>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-[1vh]">
            <div
              className="flex"
              style={{
                boxSizing: "border-box",
                backgroundImage: `url(${justBorn.src})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                height: "44vh", // Adjust the height as needed
              }}
            >
              <div className="flex flex-col justify-center pl-4 self-center">
                <h2 className={`text-2xl font-bold mb-1`}>Just born</h2>
                <p className="text-sm text-gray-600 mb-4">358 items</p>
                <button className="text-left">
                  <span className="text-sm font-bold border-b-2 border-b-pink-400 hover:text-pink-400 transition ease-in-out">
                    SHOP NOW
                  </span>
                </button>
              </div>
            </div>
            <div
              className="flex"
              style={{
                boxSizing: "border-box",
                backgroundImage: `url(${kids2to4.src})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                height: "44vh", // Adjust the height as needed
              }}
            >
              <div className="flex flex-col justify-center pl-4 self-center">
                <h2 className={`text-2xl font-bold mb-1`}>
                  Kid&apos;s 2 to 4 years
                </h2>
                <p className="text-sm text-gray-600 mb-4">278 items</p>
                <button className="text-left text-gray-400">
                  <span className="text-sm font-bold border-b-2 border-b-green-400 hover:text-green-400 transition ease-in-out">
                    SHOP NOW
                  </span>
                </button>
              </div>
            </div>
            <div
              className="flex"
              style={{
                boxSizing: "border-box",
                backgroundImage: `url(${teenagers.src})`,
                backgroundSize: "cover",
                backgroundPosition: "top left",
                backgroundRepeat: "no-repeat",
                height: "44vh", // Adjust the height as needed
              }}
            >
              <div className="flex flex-col justify-center pl-4 self-center">
                <h2 className={`text-2xl font-bold mb-1`}>Teenagers</h2>
                <p className="text-sm text-gray-600 mb-4">159 items</p>
                <button className="text-left">
                  <span className="text-sm font-bold border-b-2 border-b-blue-400 hover:text-blue-400 transition ease-in-out">
                    SHOP NOW
                  </span>
                </button>
              </div>
            </div>

            <div
              className="flex"
              style={{
                boxSizing: "border-box",
                backgroundImage: `url(${gifts.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "44vh", // Adjust the height as needed
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col justify-center pl-4 self-center">
                <h2 className={`text-2xl font-bold mb-1`}>Gifts</h2>
                <p className="text-sm text-gray-600 mb-4">792 items</p>
                <button className="text-left">
                  <span className="text-sm font-bold border-b-2 border-b-purple-400 hover:text-purple-400 transition ease-in-out">
                    SHOP NOW
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container 2xl:max-w-[80%] mx-auto pt-[10vh] pb-[7vh] flex justify-between">
        <div className="w-[49vh] h-[33vh] border border-gray-200 flex cursor-pointer relative">
          <div
            className={`${styles.block_1} ${styles.tran_03s} absolute inset-0 h-full pl-[3vh] flex flex-col justify-around`}
          >
            <div>
              <h2
                className={`${styles.block_1_txt} ${styles.tran_03s} text-2xl font-bold mb-1`}
              >
                Bikes
              </h2>
              <p
                className={`${styles.block_1_txt} ${styles.tran_03s} text-sm text-gray-600 mb-4`}
              >
                8000 onwards
              </p>
            </div>
            <div>
              <button
                className={`${styles.block_1_button} ${styles.tran_05s} text-white text-left`}
              >
                <p
                  className={`${styles.block_1_button_txt} ${styles.tran_09s} text-sm font-bold`}
                >
                  SHOP NOW
                </p>
              </button>
            </div>
          </div>
          <Image
            className="w-[75%] ml-auto h-full"
            src={categoryBike}
            alt="Category"
          ></Image>
        </div>
        <Category
          name={"Cars"}
          desc={"8500 onwards"}
          image={categoryCar}
        ></Category>
        <Category
          name={"Jeep"}
          desc={"9000 onwards"}
          image={categoryJeep}
        ></Category>
      </div>
      <section className="container 2xl: max-w-[80%] mx-auto pt-[10vh] pb-[7vh]">
        <div className="pb-[2vh]">
          <h2
            className={`${cookie.className} antialiased text-4xl mb-10 font-black uppercase`}
          >
            Product Overview
          </h2>
          <div className="flex justify-between items-center">
            <ul
              className={`${styles.pointer_parent} ${styles.list_items} flex gap-[1vw] w-[50%] text-gray-500`}
            >
              <li>All Products</li>
              <li>Cars</li>
              <li>Cycles</li>
              <li>Jeeps</li>
              <li>Bikes</li>
              <li>Toys</li>
            </ul>

            <div
              className={`${styles.pointer_parent} flex gap-[0.5vw] items-center`}
            >
              <div className="h-[5.3vh] w-[6.1vw] flex gap-1 justify-center items-center border hover:text-white hover:bg-app_purple transition-all duration-300">
                <IoFilterOutline />
                Filter
              </div>
              <div className="h-[5.3vh] w-[7.2vw] flex gap-1 justify-center items-center border hover:text-white hover:bg-app_purple transition-all duration-300">
                <IoSearchOutline />
                Search
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 text-gray-600">
          <Product
            name={"Ride on Jeep"}
            price={8999}
            image={categoryJeep}
          ></Product>
          <Product
            name={"Ride on Bike"}
            price={4999}
            image={categoryBike}
          ></Product>
          <Product
            name={"Ride on Car"}
            price={7999}
            image={categoryCar}
          ></Product>
          <Product
            name={"Ride on Dirt Bike"}
            price={3999}
            image={ProductBike}
          ></Product>
        </div>
      </section>
      <div className="py-[100vh] bg-black"></div>
    </div>
  );
};

export default HomePage;
