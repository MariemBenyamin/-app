import React from 'react'
import AllComponent from '../Components/AllComponent'
import Pagehead from './Pagehead'
import { CartProvider, useCart, } from 'react-use-cart'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { isEmpty, totalUniqueItems, totalItems, cartTotal, items, emptyCart, updateItemQuantity, removeItem, } = useCart()
  const navigate = useNavigate();

  return (
    <main>
      <div className="cart-container">

        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="container">
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-md-9">
                <div className="ibox">
                  <div className="ibox-title">
                    <span className="pull-right">(<strong>{totalUniqueItems}</strong>) items</span>
                    <h5>Items in your cart</h5>
                  </div>
                  <div className="ibox-content">
                    <div className="table-responsive">
                      <table className="table shoping-cart-table">
                        <tbody>
                          {items.map((item) => {
                            return (

                              <tr key={item.id}>
                                <td width="90">
                                  <div className="cart-product-imitation">
                                    <img
                                      className="img-fluid d-block image"
                                      src={item.image}
                                      alt={item.title}
                                      style={{ width: "180px", height: "350px", objectFit: "cover", borderRadius: "10px" }}
                                    />
                                  </div>
                                </td>

                                <td className="desc">
                                  <h3>
                                    <a href="#" className="text-navy">
                                      Real Estate
                                    </a>
                                  </h3>
                                  <p className="small">{item.title}</p>

                                  <dl className="small m-b-none">
                                    <dt>Description</dt><dd>{item.description}</dd>
                                    <dt>Location</dt><dd>{item.location}</dd>
                                    <dt>Type</dt><dd>{item.type}</dd>
                                    <dt>Area</dt><dd>{item.area}</dd>
                                    <dt>Rooms</dt><dd>{item.rooms}</dd>
                                    <dt>Bathrooms</dt><dd>{item.bathrooms}</dd>
                                    <dt>Parking</dt><dd>{item.parking}</dd>
                                  </dl>
                                  <br />

                                  <div className="m-t-sm">
                                    <button onClick={() => removeItem(item.id)} className="text-muted btn btn-sm btn-danger">
                                      <i className="fa fa-trash "></i> Remove item</button>
                                  </div>
                                </td>



                                <td width="140">
                                  <div className="d-flex align-items-center justify-content-between" style={{ gap: "5px" }}>
                                    <button className="btn btn-secondary btn-sm" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</button>
                                    <span>{item.quantity}</span>
                                    <button className="btn btn-secondary btn-sm" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</button>
                                  </div>
                                </td>

                                <td>
                                  <div className="summary-item d-flex justify-content-between">
                                    <span>Price</span>
                                    <span>${Math.ceil(item.price*item.quantity)}</span>
                                  </div>
                                </td>


                              </tr>

                            )
                          }
                          )}
                        </tbody>
                      </table>
                    </div>

                  </div>



                  <div className="ibox-content">
                    <button className="btn btn-primary pull-right" onClick={() => navigate("/payment")}> <i className="fa fa fa-shopping-cart"></i> Payment   </button>
                    <button className="btn btn-white" onClick={() => navigate("/shop")}><i className="fa fa-arrow-left"></i> Continue shopping</button>

                  </div>
                </div>

              </div>
              <div className="col-md-3">
                <div className="ibox">
                  <div className="ibox-title">
                    <h5>Cart Summary</h5>
                  </div>
                  <div className="ibox-content">
                    <span>
                      Total Items: <strong>{totalItems}</strong>
                    </span>
                    <td>
                      <div className="summary-item d-flex justify-content-between">
                        <span>Total Price</span>
                        <span>${Math.ceil(cartTotal)}</span>
                      </div>
                    </td>

                    <hr />
                    <span className="text-muted small">
                      *For United States, France and Germany applicable sales tax will be applied
                    </span>
                    <div className="m-t-sm">
                      <div className="btn-group">
                        <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-shopping-cart"></i> Checkout</a>
                        <a href="#" className="btn btn-white btn-sm"> Cancel</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ibox">
                  <div className="ibox-title">
                    <h5>Support</h5>
                  </div>
                  <div className="ibox-content text-center">
                    <h3><i className="fa fa-phone"></i> +43 100 783 001</h3>
                    <span className="small">
                      Please contact with us if you have any questions. We are avalible 24h.
                    </span>
                  </div>
                </div>

                <div className="ibox">
                  <div className="ibox-content">

                    <p className="font-bold">
                      Other products you may be interested
                    </p>
                    <hr />
                    <div>
                      <a href="#" className="product-name"> Product 1</a>
                      <div className="small m-t-xs">
                        Many desktop publishing packages and web page editors now.
                      </div>
                      <div className="m-t text-righ">

                        <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <a href="#" className="product-name"> Product 2</a>
                      <div className="small m-t-xs">
                        Many desktop publishing packages and web page editors now.
                      </div>
                      <div className="m-t text-righ">

                        <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
  )
}
function AllCart() {
  return (
    <CartProvider>
      <AllComponent />
      <Pagehead />
      <Cart />
    </CartProvider>
  )
}

export default AllCart
