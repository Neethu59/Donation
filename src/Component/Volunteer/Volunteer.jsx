import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';
export default function Volunteer() {
  const navigate=useNavigate()
  // const navigate=useNavigate()
  const key="loginid"
     const [state, setState] = useState(localStorage.getItem(key))
     useEffect(()=>{
   localStorage.getItem(state)
   if(state!=null)
   {
 navigate('/volunteer')
   }
   else{
    navigate('/')
   }
   },[])
    console.log(state)

  const[card,setcard]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/api/item/view-food")
    .then(response=>{
console.log(response)
setcard(response.data.data)
    })
  },[])
  console.log(card)
  const notify = (data) => toast(data);
  const deletedata=(id)=>{axios.get(`http://localhost:5000/api/volunteer/delete/${id}/`)
  .then(response=>{
   console.log(response)
   notify(response.data.message)
  })
}  

// const editdata=()=>{
//  useNavigate('edit')
// }
// const handleAskQuestionClick = () => {
//   useNavigate('/edit');
// };
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
   {card.map((data)=>(
  <div class="col" style={{marginTop:"5%"}}>
    <div class="card" style={{marginTOP:"15%",backgroundColor:"black",color:"white"}}>
     
      <div class="card-body">
        <h5 class="card-title">User Details</h5>
       
          <p class="card-text">
         <p> Id:{data._id} </p>
         <p>foodname:{data.food_name}</p>
         <p>exp_date:{data.exp_date}</p>
         <p>food_catogory:{data.food_category}</p>
         <p>quantity:{data.quantity}</p>
         <button style={{backgroundColor:"red",color:"white"}}onClick={()=>{deletedata(data._id)}}>Delete</button>
         <button style={{backgroundColor:"green",color:"white"}}onClick={()=>{navigate(`/edit/${data._id}`)}}>Edit</button>
             </p>

</div>
</div> 
</div>
        ))}
        
       
  </div>
  
    </>
  )
}
