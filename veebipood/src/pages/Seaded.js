import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function Seaded() {
  const [keel, muudaKeel] = useState("est");


  const aadressRef = useRef();
  const [aadress, muudaAadress] = useState ();
  
  const emailRef = useRef();
  const [email, muudaEmail] = useState ();

  const telefonRef = useRef();
  const [telefon, muudaTelefon] = useState ();




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
    }


  return (
    <div>
      <button onClick={() => muudaKeel ("est")}>Eesti keelseks</button>
      <button onClick={() => muudaKeel ("eng")}>To English</button>
      <button onClick={() => muudaKeel ("rus")}>Pyscckij</button>
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