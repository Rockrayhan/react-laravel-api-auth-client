import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../useContext/AuthProvider';

const InsertProduct = () => {

    const { user } = useContext(AuthContext) ;
    
    const [message , setMessage] = useState('') ;
    const [error , setError] = useState('') ;


    const formSubmit = (e) => {
        e.preventDefault() ;
        const form = e.target ;
        const name = form.name.value ;
        const description = form.description.value ;
        const price = form.price.value ;
        const stock = form.stock.value ;
        const user_id = user.id ;

        const data = { name, description, price, stock, user_id }

        axios.post('http://127.0.0.1:8000/api/products/store', data)
        .then( (response) => {
            console.log(response.data.message);
            setMessage(response.data.message);
            form.reset();
          })
          .catch((error) => {
            console.log(error.response.data.message);
            setError(error.response.data.message)
          });
        

    }

    return (
        <div>

{ message &&      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {message}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> }


   { error &&      <div className="alert alert-warning success-dismissible fade show" role="alert">
        {error}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> }



            <h1 className='text-center'> Insert Product </h1>




      <form className='d-flex justify-content-center my-4' onSubmit={formSubmit} >
  <div className="d-flex flex-column gap-2 w-75">
    <div className="col-12 ">
      <input type="text" className="form-control " placeholder="Name" name='name' />
    </div>
    <div className="col-12">
      <input type="text" className="form-control" placeholder="description" name='description' />
    </div>
    <div className="col-12">
      <input type="text" className="form-control" placeholder="Price" name='price'/>
    </div>
    <div className="col-12">
      <input type="text" className="form-control" placeholder="Stock" name='stock' />
    </div>
    <div className="col-12">
      <input type="text" className="form-control" name='user_id' defaultValue={user.id} />
    </div>


    <button type="submit" className="btn btn-primary ">Submit</button>
  </div>
</form>

        </div>
    );
};

export default InsertProduct;