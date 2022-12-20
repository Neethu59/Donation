import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Add() {
    const {id}=useParams()
    console.log(id);
    const key ="loginid"
    const lid= localStorage.getItem(key)
    console.log(lid)
    const [input,setinput]=useState({
      login_id:lid , 
      gender:"",
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
    console.log(lid);
    axios.post("http://localhost:5000/api/cloth/add-cloth",input
    
    )
    .then(response=>{
      console.log(response)
      console.log(response.data.message)
  })
  }
  

  return (
   <>
 <form onSubmit={registerSubmit} >
      <div class="card">
  <h4>ADD</h4>
  <div class="row">
    
    <div class="col">
      <div class="form-group">
        <label>Gender</label>
        <input type="text"name="gender"value={input.gender||""}onChange={setRegister}/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Type</label>
        <input type="text"name="type"value={input.type||""}onChange={setRegister}/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Quantity</label>
        <input type="text"name="quantity"value={input.quantity||""}onChange={setRegister}/>
      </div>
    </div>

    <div class="col">
      <input type="submit" value="Submit"/>
    </div>
  </div>
</div>

</form>
       

   </>
  )
}
