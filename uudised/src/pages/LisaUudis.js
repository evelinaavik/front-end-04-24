import { useRef } from "react";

function LisaUudis () {
    const uudisRef = useRef();

    const lisaUusUudis = () => {
        const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
        uudised.push(uudisRef.current.value);
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }
    
    return ( 
        <div>
            <label>Uudise nimi</label><br />
            <input type="text" ref={uudisRef}/><br />
            <button onClick={() => lisaUusUudis()}>Lisa uudis</button>
        </div>
     );
}

export default LisaUudis;