//import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useEffect, useState} from 'react';

const Display=()=>{
    const [bk,setBk]=useState([]);
   //const {register,handleSubmit,reset,formState:{errors}}=useForm();
 useEffect(()=>{
   const fetchData = async ()=>{
          try{
            const res=await axios.get('http://localhost:8000/books');
            setBk(res.data);
            //reset();
          }
          catch(err)
          {alert(err);}
          
   } ;
   fetchData();},[]);
   
 //{new Date(employee.JoiningDate).toLocaleDateString()}
   return(
    <div className='card'>
        <div className='card-body'>
            <h3 className='card-title'>Display</h3>
            {bk && bk.map((e)=>(
            <ul className='list-group' key={e.ISBN}>
              <li className='list-group-item'>{e.ISBN} | {e.Title} | {e.Author}</li>
               
                

                </ul>))}
            
            
        </div>
    </div>
   )


}
export default Display;