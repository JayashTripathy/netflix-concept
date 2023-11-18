import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col  ${poppins.className}`}
    >
      <div className="font-bold text-primary text-center">Netflix Concept</div>
    </main>
  );
}
