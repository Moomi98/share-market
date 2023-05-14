import { useEffect } from "react";

export default function NaverMap() {
  const mapStyle = {
    width: "100%",
    height: "100%",
  };
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        const map = new naver.maps.Map("naver-map", {
          center: new naver.maps.LatLng(latitude, longitude),
          zoom: 15,
        });

        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(latitude, longitude),
          map: map,
        });

        naver.maps.Event.addListener(map, "click", function (e) {
          marker.setPosition(e.latlng);
        });
      });
    } else return;
  }, []);

  return <div id="naver-map" style={mapStyle}></div>;
}
