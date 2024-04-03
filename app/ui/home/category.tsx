import Image from 'next/image';
import styles from './category.module.css';

interface CategoryProps {
  name: string;
  desc: string;
  image: any;
}

export default function Category(props: CategoryProps) {
  const { name, desc, image } = props;
  return (
    <div className="w-[49vh] h-[33vh] border border-gray-200 flex cursor-pointer relative">
      <div
        className={`${styles.block_1} ${styles.tran_03s} absolute inset-0 h-full pl-[3vh] flex flex-col justify-around`}
      >
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
      <Image
        className="w-[75%] ml-auto h-full"
        src={image}
        alt="CATEGORY IMAGE"
      ></Image>
    </div>
  );
}
