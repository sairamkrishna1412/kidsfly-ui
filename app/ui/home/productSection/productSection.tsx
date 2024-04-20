import Image from "next/image";
import styles from "./productSection.module.css";
import { getRandomColor } from "@/app/util/Random";
import { poppins, cookie } from "@/app/ui/fonts";
import { IoFilterOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import Product from "@/app/ui/home/product/product";
import categoryJeep from "@/public/images/category_jeep_new.png";

export default function ProductSection(props: { section: any }) {
  const { section } = props;
  return (
    <section className="container 2xl: max-w-[80%] mx-auto pt-[10vh] pb-[7vh]">
      <div className="pb-[2vh]">
        <h2
          className={`${cookie.className} antialiased text-4xl mb-10 font-black uppercase`}
        >
          {section.title}
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
        {section?.products.map((product: any, index: number) => (
          <Product
            key={index}
            name={product.productName}
            price={product.price}
            image={categoryJeep}
          ></Product>
        ))}
        {section?.products.map((product: any, index: number) => (
          <Product
            key={index}
            name={product.productName}
            price={product.price}
            image={categoryJeep}
          ></Product>
        ))}
        {section?.products.map((product: any, index: number) => (
          <Product
            key={index}
            name={product.productName}
            price={product.price}
            image={categoryJeep}
          ></Product>
        ))}
        {/* <Product
          name={"Ride on Jeep"}
          price={8999}
          image={categoryJeep}
        ></Product> */}
      </div>
    </section>
  );
}
