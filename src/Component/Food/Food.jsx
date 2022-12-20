import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Food() {

  const[value,setvalue]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/api/user/user-details")
    .then(response=>{
console.log(response.data.details)
setvalue(response.data.details)
    })
  },[])
  console.log(value)
  const notify = (data) => toast(data);
  const deletedata=(id)=>{axios.get(`http://localhost:5000/api/user/delete/${id}/`)
  .then(response=>{
   console.log(response.data.message)
   notify(response.data.message)
  })
  }
  return (
    <>

<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />      
    
   <div class="row row-cols-1 row-cols-md-2 g-4">
   {value.map((data)=>(
  <div class="col" style={{marginTop:"5%"}}>
    <div class="card" style={{marginTOP:"15%",backgroundColor:"black",color:"white"}}>
     
      <div class="card-body">
        <h5 class="card-title">User Details</h5>
       
          <p class="card-text">
         <p> Id:{data._id} </p>
         <p>user:{data.username}</p>
         <button style={{backgroundColor:"red",color:"white"}}onClick={()=>{deletedata(data._id)}}>Delete</button>
             </p>

</div>
</div> 
</div>
        ))}
        
       
  </div>
  
    </>
  )
}
