import React from 'react';
import AllComponent from '../Components/AllComponent';
import Page from './Page';
import { useNavigate } from 'react-router-dom';
import { CartProvider, useCart } from 'react-use-cart';

function Pay() {
  const { items, cartTotal } = useCart();

  return (
    <div className="container">
      <div className="row">
        {["visa", "mastercard", "discover"].map((type, idx) => (
          <div key={idx} className="col-lg-4 mb-lg-0 mb-3">
            <div className="card p-3">
              <div className="img-box">
                <img
                  src={
                    type === "visa"
                      ? "https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png"
                      : type === "mastercard"
                      ? "https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                      : "https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                  }
                  alt=""
                />
              </div>
              <div className="number">
                <label className="fw-bold">**** **** **** 1060</label>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <small>
                  <span className="fw-bold">Expiry date:</span>
                  <span>10/16</span>
                </small>
                <small>
                  <span className="fw-bold">Name:</span>
                  <span>Kumar</span>
                </small>
              </div>
            </div>
          </div>
        ))}

        <div className="col-12 mt-4">
          <div className="card p-3">
            <p className="mb-0 fw-bold h4">Payment Methods</p>
          </div>
        </div>

        <div className="col-12">
          <div className="card p-3">
            {/* PayPal Section */}
            <div className="card-body border p-0">
              <p>
                <a
                  className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapsePaypal"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapsePaypal"
                >
                  <span className="fw-bold">PayPal</span>
                  <span className="fab fa-cc-paypal"></span>
                </a>
              </p>
              <div className="collapse p-3 pt-0" id="collapsePaypal">
                <div className="row">
                  <div className="col-8">
                    <p className="h4 mb-0">Summary</p>
                    <p className="mb-0">
                      <span className="fw-bold">Product:</span>
                      <span className="c-green">: {items.name}</span>
                    </p>
                    <p className="mb-0">
                      <span className="fw-bold">Price:</span>
                      <span className="c-green">${Math.ceil(items.price)}</span>
                    </p>
                    <p className="mb-0">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credit Card Section */}
            <div className="card-body border p-0">
              <p>
                <a
                  className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapseCard"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseCard"
                >
                  <span className="fw-bold">Credit Card</span>
                  <span>
                    <span className="fab fa-cc-amex"></span>
                    <span className="fab fa-cc-mastercard"></span>
                    <span className="fab fa-cc-discover"></span>
                  </span>
                </a>
              </p>
              <div className="collapse show p-3 pt-0" id="collapseCard">
                <div className="row">
                  <div className="col-lg-5 mb-lg-0 mb-3">
                    <p className="h4 mb-0">Summary</p>
                    <p className="mb-0">
                      <span className="fw-bold">Product:</span>
                      <span className="c-green">{items.name}</span>
                    </p>
                    <p className="mb-0">
                      <span className="fw-bold">Price:</span>
                      <span className="c-green">:${Math.ceil(items.price)}</span>
                    </p>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                  </div>
                  <div className="col-lg-7">
                    <form className="form">
                      <div className="row">
                        <div className="col-12">
                          <div className="form__div">
                            <input type="text" className="form-control" placeholder=" " />
                            <label className="form__label">Card Number</label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form__div">
                            <input type="text" className="form-control" placeholder=" " />
                            <label className="form__label">MM / yy</label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form__div">
                            <input type="password" className="form-control" placeholder=" " />
                            <label className="form__label">cvv code</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form__div">
                            <input type="text" className="form-control" placeholder=" " />
                            <label className="form__label">name on the card</label>
                          </div>
                        </div>
                        <div className="col-12">
                            <a href="/success" className="btn btn-primary  w-100">Submit</a>

                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="col-12">
                                      <a href="/payment" className="btn btn-primary payment">Make Payment</a>

        </div>
      </div>
    </div>
  );
}


function AllPayment() {
    return (
        <div>
            <AllComponent />
            <Page />
            <Pay />
        </div>
    );
}

export default AllPayment;
