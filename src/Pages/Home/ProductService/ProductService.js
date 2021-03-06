import React, { useEffect, useState } from 'react';
import Services from './Services/Services';

const ProductService = () => {
    const [product,setProduct]=useState([])

    useEffect(()=>{
        fetch("https://safe-tundra-73084.herokuapp.com/cars")
        .then(res=>res.json())
        .then(data=>setProduct(data.slice(0,6)))
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid">
            {
                product.map(serv=><Services 
                key={serv._id}
                serv={serv}
                ></Services>)
            }
        </div>
    );
};

export default ProductService;