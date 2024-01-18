import React from 'react';
import { useCart } from '../context/context';
import axios from 'axios';

export default function Form() {

  const { create,setCreate,mode,setmode,setMock} = useCart();

  const iniz={
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
              city: ""
    },
    phone: "",
    website: "",
    company: {
            name: ""
          }
        }

  function handleValue(e){
    let logcopy = {...create}
    logcopy[e.target.name] = e.target.value 
    setCreate(logcopy)
  }

  function handlePost ()  { 
    mode=="update" ? axios.put(`https://jsonplaceholder.typicode.com/users/${create.id}`,create)
    .then((response)=> alert("Your updated data :"+ JSON.stringify(response.data)))
    .catch((error) => console.error("API update error",error)) : 
    axios.post("https://jsonplaceholder.typicode.com/users",create)
    .then((response) => {
      alert("You post the data :"+ JSON.stringify(response.data))
    }).catch((error) => console.error("API fetching Error",error));
    setmode("create")
    setMock((mock) =>[...mock,create])
    setCreate(iniz)
  }
  return (
    <div>
         <div className="input-group mb-3">
               <span className="input-group-text" id="basic-addon1">ID</span>
               <input type="number"  value={create?.id} name='id' onChange={(e) => {handleValue(e)}}
                className="form-control"  placeholder="id" aria-label="ID"
                 aria-describedby="basic-addon1" />
         </div>
         <div className="input-group mb-3">
               <span className="input-group-text" id="basic-addon1">Name</span>
               <input type="text" value={create?.name} name='name' onChange={(e) => {handleValue(e)}}
               className="form-control" placeholder="Enter your Name"
               aria-label="name" aria-describedby="basic-addon1" />
         </div>
         <div className="input-group mb-3">
               <span className="input-group-text" id="basic-addon1">UserName</span>
               <input type="text" value={create?.username} name='username' onChange={(e) => {handleValue(e)}}
               className="form-control" placeholder="Enter your UserName" 
               aria-label="Username" aria-describedby="basic-addon1" />
         </div>

         <div className="mb-3">
             <label className="form-label">Your vanity URL</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
              <input type="text"  value={create?.website} name='website' onChange={(e) => {handleValue(e)}}
              className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
            </div>
        </div>

          <div className="input-group mb-3">
            <input type="email"  value={create?.email} name='email' onChange={(e) => {handleValue(e)}}
            className="form-control" placeholder="Enter your Mail" 
            aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span className="input-group-text" id="basic-addon2">@gmail.com</span>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">+91</span>
            <input  value={create?.phone} name='phone' onChange={(e) => {handleValue(e)}}
            placeholder="Phone Number (unique id)" className="form-control" 
            aria-label="Phone Number(unique)" />
            <span className="input-group-text">Phone</span>
          </div>

          <div className="card-body pt-4">
           <button  className="card-link btn btn-success" onClick={handlePost}>{mode=="create" ? "Create" : "Update"}</button>
       </div>

    </div>
  )
}
