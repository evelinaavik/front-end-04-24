import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Avaleht() {
  const [postitused, uuendaPostitused] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => uuendaPostitused(data))
  },[]);

  return (
    <div>
      <p>See on avaleht</p>
      {postitused.map(element => 
        <div>
          <div>{element.userId}</div>
          <div>{element.id}</div>
          <div>{element.title}</div>
          <div>{element.body}</div>
          <Link to={"kasutaja-postitus/" + element.userId}>
            <button>Kõik selle kasutaja postitused</button>
          </Link>
          <Link to={"vaata-postitus/" + element.id}>
            <button>Kõik selle kasutaja postitused</button>
          </Link>
        </div>
         ) }    
    </div>);
}

export default Avaleht 