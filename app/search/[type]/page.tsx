"use client";
import { useEffect } from "react";
export default function Page({ params }: any) {
  const mapStyle = {
    width: "100%",
    height: "100%",
  };
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.511337, 127.012084),
      zoom: 13,
    });
  }, []);

  //지도 사이즈 관련 스타일

  return (
    <div className="border-2 h-4/5">
      <div id="map" style={mapStyle}></div>
    </div>
  );
}
