import { Link } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = (props) => {
    const {img,name,description,_id,price}=props.serv
    return (
        
        <div className="col">
          <div className="card">
            <img  src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <h6>Price: {price}$</h6>
              <button type="button" className="btn btn-danger"><NavLink className="text-decoration-none color-white text-white" to={`/placeOrder/${_id}`}>Purchase</NavLink> </button>
           
            </div>
          </div>
        </div>
       
    
     
    );
};

export default Services;