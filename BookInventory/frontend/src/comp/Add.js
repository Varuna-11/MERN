import {useForm} from 'react-hook-form';
import axios from 'axios';

const Add=()=>{
   const {register,handleSubmit,reset,formState:{errors}}=useForm();

   const onSubmit=(data)=>{
          try{
            axios.post('http://localhost:8000/book',data);
            alert('added');
            reset();
          }
          catch(err)
          {alert(err);}
   }

   return(
    <div className='card mt-3'>
        <div className='card-body'>
            <h3 className='card-title'>Add</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*klkjsdfl*/}
            <label>ISBN:</label> 
            <input type='number'
            {...register('ISBN',{required:'enter isbn'})}
            className='form-control'
            />
            {errors.ISBN && <p>{errors.ISBN.message}</p>}

            <label>title:</label>
            <input type='text'
            {...register('Title',{required:'enter title'})}
            className='form-control'
            />
            {errors.Title && <p>{errors.Title.message}</p>}
            <label>Author:</label>
            <input type='text'
            {...register('Author',{required:'enter aut',
                validate:{
                    validType:(v)=>['aaa','bbb'].includes(v) || 'invalid author'
                }
            })}
            className='form-control'
            />
            {errors.Author && <p>{errors.Author.message}</p>}
            <button className='btn btn-primary'>Add</button>
            </form>
        </div>
    </div>
   )


}
export default Add;