import { Inter } from "next/font/google";
import LargeSquareMenu from "@/components/LargeSquareMenu";
import { BsHouseDoorFill, BsHousesFill } from "react-icons/bs";
import { MdApartment, MdStore } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-wrap gap-5">
      <LargeSquareMenu
        icon={
          <BsHouseDoorFill className="my-0 mx-auto" size={60} color={"green"} />
        }
        title={"원룸"}
        link="oneroom"
      />
      <LargeSquareMenu
        icon={
          <BsHousesFill className="my-0 mx-auto" size={60} color={"green"} />
        }
        title={"투룸+"}
        link="manyroom"
      />
      <LargeSquareMenu
        icon={
          <MdApartment className="my-0 mx-auto" size={60} color={"green"} />
        }
        title={"아파트"}
        link="apartment"
      />
      <LargeSquareMenu
        icon={<MdStore className="my-0 mx-auto" size={60} color={"green"} />}
        title={"상가"}
        link="store"
      />
    </div>
  );
}
