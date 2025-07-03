import React, { useContext } from 'react'
import AllComponent from '../Components/AllComponent'
import Pagehed from './Pagehed'
import { apiValue } from '../Data/AllData'
import { Link } from 'react-router';
import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

function AllProducts() {
  const [Search, setSearch] = useState(0);
  const data = useContext(apiValue);

  const getValue = (event) => {
    setSearch(event.target.value);
  }
  return (
    <div>
      <AllComponent />
      <Pagehed />

      <div className='section properties'>
        <div className="container">
          <div className="row properties-box">

           <div className='col-md-10 m-auto'>
            <h4 className='text-center mb-3'>Search </h4>
            <input className='form-control mb-5' type="text" placeholder='Search' onChange={getValue} />
           </div>

            {data.map((item) => {
              return Search==0 ? (

                <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
                  <div className="item">
                    <a href="property-details.html"><img src={item.image} alt="" /></a>
                    <span className="category">{item.title}</span>
                    <h6>${item.price}</h6>
                    <h4><a href="property-details.html">{item.description}</a></h4>
                    <ul>
                      <li>location: <span>{item.location}</span></li>
                      <li>type: <span>{item.type}</span></li>
                      <li>area: <span>{item.area}</span></li>
                      <li>rooms: <span>{item.rooms}</span></li>
                      <li>bathrooms: <span>{item.bathrooms}</span></li>
                      <li>parking: <span>{item.parking}</span></li>
                    </ul>
                    <div className="main-button">
                      <Link to="/details">Schedule a visit</Link>
                    </div>
                  </div>
                </div>
             
            ):item.title.toLowerCase().includes(Search.toLowerCase()) ? (
                  <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
                  <div className="item">
                    <a href="property-details.html"><img src={item.image} alt="" /></a>
                    <span className="category">{item.title}</span>
                    <h6>${item.price}</h6>
                    <h4><a href="property-details.html">{item.description}</a></h4>
                    <ul>
                      <li>location: <span>{item.location}</span></li>
                      <li>type: <span>{item.type}</span></li>
                      <li>area: <span>{item.area}</span></li>
                      <li>rooms: <span>{item.rooms}</span></li>
                      <li>bathrooms: <span>{item.bathrooms}</span></li>
                      <li>parking: <span>{item.parking}</span></li>
                    </ul>
                    <div className="main-button">
                      <Link to="/details">Schedule a visit</Link>
                    </div>
                  </div>
                </div>
             
              ):null




            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProducts




