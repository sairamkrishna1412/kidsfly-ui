import Image from "next/image";
import styles from "./category.module.css";
import { getRandomColor } from "@/app/util/Random";

export default function Category(props: { name: any; desc: any; image: any }) {
  const { name, desc, image } = props;

  const randomColor = getRandomColor();
  return (
    <div
      className={` w-[49vh] h-[33vh] border border-gray-200 flex cursor-pointer relative`}
    >
      <div
        className={`hover:bg-app_purple hover:bg-${randomColor} ${styles.block_1} ${styles.tran_03s} absolute inset-0 h-full pl-[3vh] flex flex-col justify-around`}
      >
        <div className="w-[25%]">
          <div>
            <h2
              className={`${styles.block_1_txt} ${styles.tran_03s} text-2xl font-bold mb-1 text-gray-900`}
            >
              {name}
            </h2>
            <p
              className={`${styles.block_1_txt} ${styles.tran_03s} text-sm text-gray-600 mb-4`}
            >
              {desc}
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
      </div>
      <Image
        className="w-[70%] ml-auto h-full"
        src={image}
        alt="CATEGORY IMAGE"
      ></Image>
    </div>
  );
}
