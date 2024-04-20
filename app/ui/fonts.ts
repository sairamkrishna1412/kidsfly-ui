import { Montserrat } from "next/font/google";
import { Playpen_Sans } from "next/font/google";
import { Poppins } from "next/font/google";

export const cookie = Playpen_Sans({
  subsets: ["latin"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
