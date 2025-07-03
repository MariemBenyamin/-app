import React from 'react'

function PaySuccess() {
  return (
    <div>
      <div className="payment-container">
        <div className="payment-printer-top"></div>

        <div className="payment-paper-container">
          <div className="payment-printer-bottom"></div>

          <div className="payment-paper">
            <div className="payment-main-content">
              <div className="payment-icon">&#10004;</div>
              <div className="payment-title">Payment Complete</div>
              <div className="payment-description">
                Your payment for $N in USDT has been received and sent to SHOPNAME.
              </div>
              <div className="payment-details">
                <div className="payment-label">Payment ID</div>
                <div className="payment-id">JPZZ1V-WQRR94-78E1VE</div>
              </div>
              <div className="payment-footer">You can close this page!</div>
            </div>
            {/* <!-- Back to Home Button --> */}
            <div className="payment-back-home">
              <a href="/" className="btn btn-primary w-100">← Back to Home</a>
            </div>
            <div className="payment-jagged-edge"></div>
          </div>
          <div className="payment-footer">You can close this page!</div>


        </div>
      </div>

    </div>
  )
}

export default PaySuccess