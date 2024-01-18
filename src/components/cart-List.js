import React from 'react';
import { useCart } from '../context/context';
import axios from 'axios';

export default function CartList() {
  let {mock,setMock,setCreate,setmode} = useCart()

      function cartDelete(data){
         const unMatcheddata = mock.filter((value) => value.id !== data.id )
          /**Axios Delete and Local Delete*/
          const matcheddata = mock.filter((value) => value.id === data.id)
          axios.delete(`https://jsonplaceholder.typicode.com/users/${matcheddata}`,{ data: matcheddata })
          .then((res)=> alert("You delete the data :"+ JSON.stringify(res)))
          setMock(unMatcheddata)
      }

      function cartUpdate(data={}){
        setCreate(data)
        const unmatched = mock.filter((value) => value.id !== data.id)
          setmode("update")
          setMock(unmatched)
      }

  return (
    <div className="grid-container gap-4">
      {mock.map((data,index)=> <div key={`data ${index}`} className="card" style={{width: "18rem"}}>
        <div className='p-1'>
        </div>
        <div className='card-body text-start'>  
        <p><b>Name :</b>{data.name}</p>
        <p><b>username :</b>{data.username}</p>
        <p><b>website :</b> {data.website}</p>
        <p><b>email :</b> {data.email}</p>
        <p><b>phone :</b> {data.phone}</p>
        </div>
        <span className="card-body pt-0">
           <button  className="card-link btn btn-primary" onClick={() => cartUpdate(data)}>Update</button>
           <button  className="card-link btn btn-danger" onClick={() => cartDelete(data)}>Delete</button>
       </span>
      </div>)}
    </div>
  );
}

