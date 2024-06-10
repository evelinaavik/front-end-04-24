import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

function YksPostitus() {
    const {postituseId } = useParams();
    const [postitus, uuendaPostitus] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1" + postituseId)
        .then(res => res.json())
        .then(data => uuendaPostitus(data))
    },[postituseId]);
  return (
    <div>
          <div>{postitus.userId}</div>
          <div>{postitus.id}</div>
          <div>{postitus.title}</div>
          <div>{postitus.body}</div>
    </div>
  );
}

export default YksPostitus