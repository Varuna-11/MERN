import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Add from './comp/Add';
import Display from './comp/Display';
import Search from './comp/Search';
import Update from './comp/Update';
import Delete from './comp/Delete';
const App=()=>{
   return(
    <Router>
        <div className='card'>
          <div className='card-body'>
          <h3 className=' ard-title mb-3 mt-3'>Book</h3>
          <Link to='/add' className='btn btn-primary'>Add</Link>
           <Link to='/display' className='btn btn-success'>Display</Link>
          <Link to='/search' className='btn btn-secondary'>Search</Link>
          <Link to='/update' className='btn btn-warning'>Update</Link>
          <Link to='/delete' className='btn btn-danger'>Delete</Link>
        </div>
        </div>

        <Routes>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/display' element={<Display/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/update' element={<Update/>}></Route>
          <Route path='/delete' element={<Delete/>}></Route>
        </Routes>




    </Router>
   )

}
export default App;