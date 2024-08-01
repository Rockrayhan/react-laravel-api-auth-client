import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../useContext/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(products);

  const {user,token} = useContext(AuthContext);
  console.log(user.name);

  let num = 1
    return (
        <div>
          <h1 className='text-primary'> Welcome Home </h1>  
          {
            token == null ?
          <h6 className='text-warning mt-5'> Please Log in to continue..... </h6>
          :
          <h6 className='text-warning mt-5'> Hello <span className='h4'>{user.name} </span>  </h6>
          }


<div>
  <Link to='/insert'><button className='btn btn-primary'> Insert Product </button></Link>


  <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price </th>
      <th scope="col">Stock </th>
      <th scope="col"> Action </th>
    </tr>
  </thead>
  <tbody>

    {products.map((item) => <tr> 
    
      <th scope="row"> {num++} </th>
      <td>{item.name}</td>
      <td> {item.description} </td>
      <td> {item.price} </td>
      <td> {item.stock} </td>
      <td>
         <button className='btn btn-warning'> Edit </button> 
         <button className='btn btn-delete'> Delete </button> 
      </td>
    </tr>
      )}

 
  </tbody>
</table>





</div>





          
        </div>
    );
};

export default Home;