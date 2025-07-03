import React from 'react'
import AllComponent from '../Components/AllComponent'
import { useContext } from 'react'
import { apiValue } from '../Data/AllData'
import { CartProvider, useCart } from 'react-use-cart';
import Pagehead from './Pagehead';

function Page() {
  const { addItem } = useCart();
  const data = useContext(apiValue);
  return (
    <div>
      <div className='section properties'>
        <div className="container">
          <div className="row properties-box">

            {data.map((item) => {
              return (
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
                      <button onClick={() => addItem(item)}>Buy & Rent</button>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

function AllShop() {
  return (
    <CartProvider>
      <AllComponent />
      <Pagehead />
      <Page />

    </CartProvider>
  )
}

export default AllShop