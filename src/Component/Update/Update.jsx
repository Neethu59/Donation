import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Update() {
    const {id}=useParams()
    console.log(id);
    const [input,setinput]=useState({
      id:id,
      gender: "",
      type: "",
      quantity: ""
      
      
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
  axios.post("http://localhost:5000/api/cloth/update-cloth",input
  
  )
  .then(response=>{
    console.log(response)
})
}


  return (
    <>
 
<div id="log">
      <form onSubmit={registerSubmit}>
        <div class='card' id="card1">
          <div class='card-body-center' id="card-body">

            <div className='fb'>
              <input type="text" placeholder='Gender' name="gender" value={input.gender || ""} onChange={setRegister}  id="password" /><br /><br />
              <input type="text" placeholder='Type' name="type" value={input.type || ""} onChange={setRegister} id="password" /><br /><br />

              <input type="number" placeholder='Quantity' name="quantity" value={input.quantity || ""} onChange={setRegister}  id="password" /><br /><br />
             <input type="submit" value="Submit" required id="btn" /><br />

            </div>
          </div></div>
      </form>
      </div>  
    </>
  )
}
