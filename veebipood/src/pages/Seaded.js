import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {   // pean võtma localStorage-st 
  const [keel, muudaKeel] = useState(localStorage.getItem("keel") || "est ");   // || - loob default väärtuse, kui localStorage-st tuleb tühjust ehk ei ole varasemat valikut
  // võtab localStorage-st info keele valiku kohta   // Inspect -> application -> local storage 

  const aadressRef = useRef();
  const [aadress, muudaAadress] = useState (localStorage.getItem("aadress"));
  
  const emailRef = useRef();
  const [email, muudaEmail] = useState (localStorage.getItem("email"));

  const telefonRef = useRef();
  const [telefon, muudaTelefon] = useState (localStorage.getItem("telefon"));

    function sisestaAadress(){
      if (aadressRef.current.value === "") {
        toast.error("Pead midagi sisestama");
        return;   
        // return lõpetab funktsiooni ehk siit edasi ei lähe; samaväärne if else -ga
      }

      if (aadressRef.current.value.length < 4 ) {
        toast.error("Rohekem tähemärke");
        return;   
       }   
        // tähemärkide arv vajutuse hetkel
// edakalt lisatud vastvalt tingimmustele

            muudaAadress(aadressRef.current.value); 
            toast.success("Olemas!");
            localStorage.setItem("aadress", aadressRef.current.value);
    }
       
    function sisestaEmail(){
      if (emailRef.current.value === "") {
        toast.error("Pead midagi sisestama");
        return;   
      }

      if (emailRef.current.value.includes("@") === false ) {   // kas sisaldab kusagil @ märki
        toast.error("Peab sisaldama @");
        return;   
       }   

           muudaEmail(emailRef.current.value); 
            toast.success("Olemas!");
            localStorage.setItem("email", emailRef.current.value);
    }
  
    function sisestaTelefon(){

      if (telefonRef.current.value === "") {
        toast.error("Pead midagi sisestama");
        return;   
      }

      if (telefonRef.current.value.startsWith("+372") === false ) {   // kas sisaldab kusagil @ märki
        toast.error("Telefoni nr peab algama Eesti suunakoodiga: ");
        return;   
       }   

       if (isNaN(telefonRef.current.value) === true ) {  
        toast.error("Telefoni peab olema number ");
        return;   
       }  
                 
       toast.success("Olemas!");
      muudaTelefon(telefonRef.current.value);
      localStorage.setItem("telefon", telefonRef.current.value);
    }

    function muudaKeelEst() {
      muudaKeel("est");
     localStorage.setItem("keel", "est");         // see on localStorage-sse salvestamine
    }

    function muudaKeelRus() {
      muudaKeel("rus");
     localStorage.setItem("keel", "rus");         // see on localStorage-sse salvestamine
    }

    function muudaKeelEng() {
      muudaKeel("eng");
     localStorage.setItem("keel", "eng");         // see on localStorage-sse salvestamine
    }

  return (
    <div>
      <button onClick={muudaKeelEst}>Eesti keelseks</button>    
      <button onClick={muudaKeelRus}>Pycckij</button>
      <button onClick={muudaKeelEng}>English</button> 

      {/* <button onClick={() => muudaKeel ("eng")}>To English</button>   */}
      {/* sama kui funktsiooniga keele muutmine */}

      <div>Aktiivne keel: {keel} </div>
      {keel === "est" && <div>Leht on hetke eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>na pycckom</div>}
<br /><br />

        <label>Aadress</label>
        <input type="text" ref={aadressRef} />
        <button  onClick={sisestaAadress} >Sisesta</button>
       <div>
        Sisestatud aadress: {aadress}
       </div>
       <br /><br />

       <label>Email</label>
        <input type="text" ref={emailRef} />
        <button  onClick={sisestaEmail} >Sisesta</button>
       <div>
        Sisestatud emaail: {email}
       </div>
       <br /><br />


       <label>Telefon</label>
        <input type="text" ref={telefonRef} />
        <button  onClick={sisestaTelefon} >Sisesta</button>
       <div>
        Sisestatud telefon: {telefon}
       </div>

       <ToastContainer 
        position="bottom-right"
        autoClose={4000}    // sekundid
        theme="dark"
       />
    </div>
  )
}

export default Seaded