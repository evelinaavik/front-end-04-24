import { useState } from 'react';
import Map from '../../components/Map.js'
import {Button} from '@mui/material';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [57.417317, 20.717850], zoom: 6});

  return (<div className="contact">
    <Button variant="Submit"  onClick={() => setCoordinates({lngLat: [57.417317, 20.717850], zoom: 6})}>All Shops</Button>
    {/* <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</Button> */}
    <Button variant="Submit"  onClick={() => setCoordinates({lngLat: [59.4196, 24.7052], zoom: 13})}>Tallinn</Button>
    <Button variant="Submit"  onClick={() => setCoordinates({lngLat: [56.9619, 24.0589], zoom: 14})}>Riga</Button>
    <Button variant="Submit"  onClick={() => setCoordinates({lngLat: [54.6824, 25.2570], zoom: 14})}>Vilnius</Button>
    <Button variant="Submit" onClick={() => setCoordinates({lngLat: [59.306094, 17.754801], zoom: 14}) }>Stockholm</Button>
   
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;