import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import'./Edit.css';
import axios from 'axios'

export default function Edit() {
    const {id}=useParams()
    console.log(id);
    const [input,setinput]=useState({
      id:id,
      food_name: "",
      category: "",
      quantity: "",
      date: ""
      
})
const setRegister=(event)=>{

  const{name,value}=event.target
  setinput({
    ...input,[name]:value

  })
  console.log(input);
}

const registerSubmit =(event)=>{
  event.preventDefault()
  axios.post("http://localhost:5000/api/item/update-food",input
  
  )
  .then(response=>{
    console.log(response)
})
}



    


  return (
    <>
    

<div id="log">
      <form onSubmit={registerSubmit} >
        <div class='card' id="card1">
          <div class='card-body-center' id="card-body">

            <div className='fb'>
              <input type="text" placeholder='Foodname' name="gender" value={input.food_name || ""} onChange={setRegister}  id="password" /><br /><br />
              <input type="text" placeholder='Catogory' name="type" value={input.category || ""} onChange={setRegister} id="password" /><br /><br />

              <input type="number" placeholder='Quantity' name="quantity" value={input.quantity || ""} onChange={setRegister}  id="password" /><br /><br />
              <input type="number" placeholder='Date' name="date" value={input.date || ""} onChange={setRegister}  id="password" /><br /><br />
              
             <input type="submit" value="Submit" required id="btn" /><br />

            </div>
          </div></div>
      </form>
      </div>  
   
 </>    
  )
}

