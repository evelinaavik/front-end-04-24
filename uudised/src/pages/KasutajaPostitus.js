import React from 'react'
import { useParams } from 'react-router-dom'
import  { useState, useEffect } from 'react';

function KasutajaPostitus() {
    const {kasutajaId} = useParams();
    const [postitused, uuendaPostitused] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            const result = data.filter(element => element.userId === Number(kasutajaId));
            uuendaPostitused(result);
        })
      }, [kasutajaId]);

  return (
    <div>Kasutaja postitus:
        {postitused.map(element => 
        <div>
          <div>{element.userId}</div>
          <div>{element.id}</div>
          <div>{element.title}</div>
          <div>{element.body}</div>
          {/* <Link to={"kasutaja-postitus/" + element.userID}>
            <button>Kõik selle kasutaja postitused</button>
          </Link> */}
        </div>
         ) }    
    </div>);
}


export default KasutajaPostitus