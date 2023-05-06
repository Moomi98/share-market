import styles from "@/components/header.module.css";
import SearchBar from "@/components//SearchBar";
import { BsHouseDoor } from "react-icons/bs";
import Image from "next/image";
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 h-20 gap-2">
      <div className="flex items-center justify-between gap-3 whitespace-nowrap cursor-pointer select-none">
        <Image alt="logo" src={"/assets/logo.png"} width={150} height={80} />
      </div>
      <SearchBar />
    </header>
  );
}
