import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

export default function SearchBar() {
  return (
    <div className="w-full h-full flex items-center justify-around rounded-3xl border-2  border-slate-200 p-3 gap-2">
      <AiOutlineSearch size={20} className="text-slate-400" />
      <input className="w-full h-full focus:outline-none " />
      <AiOutlineClose size={20} className="text-slate-400 cursor-pointer" />
    </div>
  );
}
