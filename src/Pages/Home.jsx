import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../useContext/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [message , setMessage] = useState('') ;
  const [error , setError] = useState('') ;

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const { user, token } = useContext(AuthContext);

  let num = 1;



  const handleDelete = (id) => {
    if ( window.confirm("are you sure want to delete ?")) {
      axios.post(`http://127.0.0.1:8000/api/products/delete/${id}`)
      .then( (response) => {
          setMessage(response.data.message);
          setProducts(products.filter((product)=> product.id !== id  ))
        })
        .catch((error) => {
          setError("Failed to delete. Try again..!!") ;
          console.log(error);
        });
    }
    

  }

  return (
    <div>
      <h1 className="text-primary"> Welcome Home </h1>
      {token == null ? (
        <h6 className="text-warning mt-5"> Please Log in to continue..... </h6>
      ) : (
        <h6 className="text-warning mt-5">
          {" "}
          Hello <span className="h4">{user.name} </span>{" "}
        </h6>
      )}




{ message &&      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {message}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> }


   { error &&      <div className="alert alert-warning success-dismissible fade show" role="alert">
        {error}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> }





{/* loader */}
 <div className="d-flex justify-content-center">
 {loading && (
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
 </div>


     {
      loading == false &&  <div>
        <Link to="/insert" className="d-flex justify-content-end mb-3">
          <button className="btn btn-primary"> Insert Product </button>
        </Link>


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
            {products.map((item) => (
              <tr>
                <th scope="row"> {num++} </th>
                <td>{item.name}</td>
                <td> {item.description} </td>
                <td> {item.price} </td>
                <td> {item.stock} </td>
                <td>
                  <Link to={`/edit/${item.id}`}><button className="btn btn-warning"> Edit </button></Link>
                  <button onClick={ ()=> handleDelete(item.id)} className="btn btn-danger ms-2"> Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     }


    </div>
  );
};

export default Home;
