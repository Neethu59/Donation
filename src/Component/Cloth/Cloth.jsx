import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
export default function Cloth() {
    const navigate=useNavigate()
    const[value,setvalue]=useState([])
useEffect(()=>{
    axios.get("http://localhost:5000/api/cloth/view-cloth")
    .then(response=>{
      console.log(response.data.data);
      setvalue(response.data.data)  
    })
},[])
console.log(value);
const notify = (data) => toast(data);
const deletedata=(id)=>{axios.get(`http://localhost:5000/api/cloth/delete-cloth/${id}/`)
.then(response=>{
 console.log(response)
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

<Navbar/>
 <div class="row row-cols-1 row-cols-md-2 g-4">
   {value.map((data)=>(
  <div class="col" style={{marginTop:"5%"}}>
    <div class="card" style={{marginTOP:"15%",backgroundColor:"black",color:"white"}}>
     
      <div class="card-body">
        <h5 class="card-title">User Details</h5>
       
          <p class="card-text">
         <p> Id:{data._id} </p>
         <p>Gender:{data.gender}</p>
         <p>Type:{data.type}</p>
         <p>Quantity:{data.quantity}</p>
         
         <button style={{backgroundColor:"red",color:"white"}}onClick={()=>{deletedata(data._id)}}>Delete</button>
         <button style={{backgroundColor:"green",color:"white"}} onClick={()=>{navigate(`/update/${data._id}`)}}>Update</button>
         <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>{navigate(`/add/${data._id}`)}}>Add</button>
             </p>

</div>
</div> 
</div>
        ))}
        
       
  </div>
  <Footer/> 
    </>
  )
}
