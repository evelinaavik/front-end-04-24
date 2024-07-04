import React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25,41], 
    iconAnchor: [12,41],
    popupAnchor: [2, -40],
  });
  L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {
  return (
    <div>
         <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.4196, 24.7052]}>
        <Popup>
          Tallinn shop <br /> Address: Streetname 12/3 <br /> Phone: +372 555 123 <br /> Opening hours: Monday to Friday 9.00-19.00
        </Popup>
      </Marker>
      <Marker position={[56.9619, 24.0589]}>
        <Popup>
          Riga shop <br /> Address: Streetname 12/3 <br /> Phone: +371 555 123 <br /> Opening hours: Monday to Friday 9.00-19.00
        </Popup>
      </Marker>
    <Marker position={[54.6824, 25.2570]}>
        <Popup>
          Vilnius shop <br /> Address: Streetname 12/3 <br /> Phone: +370 555 123 <br /> Opening hours: Monday to Friday 9.00-19.00
        </Popup>
      </Marker>
      <Marker position={[59.306094, 17.754801]}>
        <Popup>
          Stockholm shop <br /> Address: Streetname 12/3 <br /> Phone: +46 555 123 <br /> Opening hours: Monday to Friday 9.00-19.00
        </Popup>
      </Marker>
    </MapContainer>

    </div>
  )
}

export default Map