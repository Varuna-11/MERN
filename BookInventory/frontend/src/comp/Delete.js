import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useState} from 'react';


const Delete=()=>{
    const [bk,setBk]=useState(null);
   const {register,handleSubmit,reset,formState:{errors}}=useForm();

   const onSubmit=async (data)=>{
          try{
            //const res=
            await axios.delete(`http://localhost:8000/book/${data.ISBN}`);
            alert('deleted');
            //setBk(res.data);
            reset();
          }
          catch(err)
          {alert(err);}
   }
 
   return(
    <div className='card'>
        <div className='card-body'>
            <h3 className='card-title'>Delete</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
            <label>ISBN:</label>
            <input type='number'
            {...register('ISBN',{required:'enter isbn'})}
            className='form-control'
            />
            {errors.ISBN && <p>{errors.ISBN.message}</p>}

            
            
            <button className='btn btn-primary'>Delete</button>
            </form>
            { bk ? (<div>
                <p>{bk.ISBN} | {bk.Title} | {bk.Author} deleted</p>
            </div>):(<p></p>)}
            
        </div>
    </div>
   )


}
export default Delete;