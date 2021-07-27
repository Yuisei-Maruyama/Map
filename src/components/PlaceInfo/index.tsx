// import { useState } from 'react'
// import { Marker, InfoWindow } from "@react-google-maps/api"
// import { GMapWindow } from '../../types'

// declare const window: GMapWindow

function PlaceInfo() {
  // const places = [
  //   { info: "info1", location: { lat: 35.68133204240732, lng: 139.76715698502676 } }
  // ]

  // interface Marker {
  //   info?: string
  //   location: {
  //       lat: number
  //       lng: number
  //   }
  // }

  // const [selected, setSelected] = useState<Marker | null>(null)

  return (
  //   <>
  //   {places.map((marker) => (
  //     <Marker
  //       key={`${marker.location.lat * marker.location.lng}`}
  //       position={{
  //         lat: marker.location.lat,
  //         lng: marker.location.lng,
  //       }}
  //       onMouseOver={() => {
  //         setSelected(marker)
  //       }}
  //       icon={{ // アイコン表示設定
  //         url: "url of icon",
  //         origin: new window.google.maps.Point(0, 0),
  //         anchor: new window.google.maps.Point(15, 15),
  //         scaledSize: new window.google.maps.Size(30, 30),
  //       }}
  //     />
  //   ))}

  //   {selected ? (
  //     // MarkerにマウスオーバーされたときにInfoWindowが表示されます。
  //     <InfoWindow
  //       position={{
  //         lat: selected.location.lat,
  //         lng: selected.location.lng,
  //       }}
  //       onCloseClick={() => {
  //         setSelected(null);
  //       }}
  //     >
  //         <div>
  //           {/* {selected.info} */}
  //         <p>ここにカスタムアイコン選択モーダルを設置</p>
  //         </div>
  //     </InfoWindow>
  //   ) : null}
  // </>
    <div></div>
  )
}

export default PlaceInfo
