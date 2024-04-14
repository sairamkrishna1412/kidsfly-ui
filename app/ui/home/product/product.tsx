import { IoHeartOutline } from "react-icons/io5";
import Image from "next/image";
import styles from "./product.module.css";
import { getRandomColor } from "@/app/util/Random";

export default function Product(props: { name: any; price: any; image: any }) {
  const { name, price, image } = props;
  const randomColor = getRandomColor();

  return (
    <div className="flex flex-col h-[40vh]">
      <div
        className={`flex flex-col items-center mb-[1.5vh] w-[90%] h-[38vh] self-center ${styles.zoom_image_block}  `}
      >
        <Image
          className={`${styles.zoom_image} ${styles.tran_09s} !h-[28vh]`}
          src={image}
          alt={"Product Image"}
        ></Image>
        <div className="flex items-center h-[8vh]">
          <button className={`${styles.zoom_image_button} ${styles.tran_05s}`}>
            <p className={`${styles.zoom_image_button_text}`}>Quick View</p>
          </button>
        </div>
      </div>
      <div className={`hover:text-${randomColor} transition-all duration-200`}>
        <div className={`flex justify-between `}>
          <p className={`cursor-pointer`}>{name}</p>
          <IoHeartOutline className="cursor-pointer" />
        </div>
        <p className={``}>₹ {price}</p>
      </div>
    </div>
  );
}
