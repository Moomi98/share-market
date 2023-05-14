"use client";
import RoomMenu from "@/search/[type]/RoomMenu";
import NaverMap from "@/search/[type]/NaverMap";

export default function Page({ params }: any) {
  return (
    <div className="flex w-full border-2 h-full">
      <NaverMap />
      <RoomMenu />
    </div>
  );
}
