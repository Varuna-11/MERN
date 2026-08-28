import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useState} from 'react';


const Update=()=>{
    const [bk,setBk]=useState(null);
   const {register,handleSubmit,reset,formState:{errors}}=useForm();

   const onSubmit=async (data)=>{
          try{
            const res=await axios.put(`http://localhost:8000/book/${data.ISBN}`,data);
            alert('updated');
            setBk(res.data);
            reset();
          }
          catch(err)
          {alert(err);}
   }

   return(
    <div className='card'>
        <div className='card-body'>
            <h3 className='card-title'>Add</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
            <label>ISBN:</label>
            <input type='number'
            {...register('ISBN',{required:'enter isbn'})}
            className='form-control'
            />
            {errors.ISBN && <p>{errors.ISBN.message}</p>}

            
            <label>Author:</label>
            <input type='text'
            {...register('Author',{required:'enter aut'})}
            className='form-control'
            />
            {errors.Author && <p>{errors.Author.message}</p>}
            <button className='btn btn-primary'>Update</button>
            </form>
            { bk ? (<div>
                <p>{bk.ISBN} | {bk.Title} | {bk.Author}</p>
            </div>):(<p></p>)}
            
        </div>
    </div>
   )


}
export default Update;