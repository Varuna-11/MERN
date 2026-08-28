import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useState} from 'react';

const Search=()=>{
    const [bk,setBk]=useState(null);
   const {register,handleSubmit,reset,formState:{errors}}=useForm();

   const onSubmit=async (data)=>{
          try{
            const res=await axios.get(`http://localhost:8000/book/${data.ISBN}`);
            setBk(res.data);
            reset();
          }
          catch(err)
          {alert('not found');}
   }

   return(
    <div className='card'>
        <div className='card-body'>
            <h3 className='card-title'>Search</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>ISBN:</label>
            <input type='number'
            {...register('ISBN',{required:'enter isbn'})}
            className='form-control'
            />
            {errors.ISBN && <p>{errors.ISBN.message}</p>}

            
            <button className='btn btn-primary'>Search</button>
             </form>
            { bk ? (<textarea rows="10" value={JSON.stringify(bk,null,2)} readOnly></textarea>):(<p></p>)}
            
        </div>
    </div>
   )


}
export default Search;