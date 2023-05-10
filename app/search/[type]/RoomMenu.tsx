import { AiFillFilter } from "react-icons/ai";

export default function RoomMenu() {
  return (
    <div className="w-full h-full overflow-hidden">
      <header className="flex items-center justify-end w-full h-16 border-b-2 border-slate-200 p-3 text-center">
        <div className="w-3/5 h-full flex items-center justify-between ">
          <span>총 0개의 검색 결과</span>
          <AiFillFilter size={25} color="#888" className="cursor-pointer" />
        </div>
      </header>
      <div className="w-full h-full bg-gray-50"></div>
    </div>
  );
}
