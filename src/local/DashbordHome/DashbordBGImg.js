import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Firebase/Hooks/useAuth";
import SliderImg from "../Banner/SliderImg";

const DashbordBGImg = () => {
  const { user, isLoader,admin } = useAuth();
   const email = user.email;
   const [users, setUsers] = useState([]);
  const [Products, setProduct] = useState([{}]);
// console.log('Products',Products);

  useEffect(() => {
    fetch(`https://sleepy-journey-86126.herokuapp.com/userOder/${email}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [user]);

  useEffect(() => {
    fetch('https://sleepy-journey-86126.herokuapp.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

 
   return (
        <Fragment>
            <div
            className="row  d-flex "
            style={{ backgroundColor: "#f6f6f2", justifyContent: 'space-evenly'}}
            >
                 <div className=" mt-5 text-left row order-details"
                 style={{ backgroundColor: "#f6f6f2", justifyContent: 'space-evenly'}}
                 >
                     <div className="col-md-6  col-sm-12">
                     <img className="img-circle" src={user.photoURL} />
                     {
                         admin &&(
                             <p
                             style={{ color: "#ec4201" }}
                             >Admin</p>
                         ) 
                     }
                     {
                         !admin &&(
                             <p 
                             style={{ color: "#ec4201" }}
                             >New User</p>
                         ) 
                     }
                       <h4 className="mb-4">User Info</h4>
                       <p>
                         <b>Name:</b>
                         <span> {user.displayName}</span>
                       </p>
                       <p>
                         <b>Email:</b>
                         <span> {user.email}</span>
                       </p>
 
                     </div>
                     <div className="col-md-4 col-sm-12">
                     <SliderImg></SliderImg>
                     </div>
                 <hr />
                 
                 </div>
                 <div>
                 <div className="col-md-12 col-sm-12">
                    <p className={user?.state && String(user?.state).includes('Delivered') ? "greenColor" : "redColor"} ><b>{user?.state}</b></p>
                     <h4 className="my-4">Order Items: {Products?.length}</h4>
                    <div className="cart-item my-1">
                     {Products.map(item => (
                  <div key={item?.product} className="row my-5"
                  style={{fontFamily:'system-ui',color:'darkolivegreen'}}
                  >
                      <div className="col-2 col-lg-2">
                          <img src={item?.url} alt={item?.name} height="45" width="65" />
                      </div>

                      <div className="col-4 col-lg-2">
                          <Link to={`/product/${item?.oder?._id}`}
                          style={{color:'#a98b1d', fontSize: 'large',fontWeight: '500'}}
                          >{item?.name}</Link>
                      </div>

                      <div className="col-3  col-lg-2 mt-4 mt-lg-0">
                          <p>${item?.price}</p>
                      </div>

                      <div className="col-3 col-lg-3 mt-4 mt-lg-0">
                          <p>{item?.state}</p>
                      </div>
                  </div>
                  ))}
                 </div>

               </div>
              </div>
            </div>
        </Fragment>
  );
};

export default DashbordBGImg;