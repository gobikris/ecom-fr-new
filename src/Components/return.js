import React from 'react'

export default function Return() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-5 text-decoration-underline text-danger">
          Return, Refund, and Cancellation
        </h2>
        <div className="row">
          <div className="col mt-5">
            <ol>
              <li className="fw-bold">
                You can raise cancellation requests for items or orders within
                24 hours from the time of placing the order by sharing an email
                with your order ID and the reason for cancellation. Remember the
                cancellation request must be raised from the ID used while
                ordering on our site. Send us the email at support@clothes.in
              </li>
              <br />
              <li className="fw-bold">
                Once the order is shipped from the warehouse, it cannot be
                canceled. When the shipment is delivered and if the customer
                receives a faulty product then he or she can raise the return
                request.
              </li>
              <br />
              <li className="fw-bold">
                If you have received a damaged product/s, no worries, you can
                return the product and the amount will be refunded in your used
                payment method within 7 working days once the product is picked
                and received at our warehouse for approval of cancellation with
                valid reason. If the product item delivered to you was faulty
                from our end we will replace the product. Refund will be only
                given when we receive the product our end and QC verified.
              </li>
              <br />
              <li className="fw-bold">
                For cash on delivery orders, the refund amount will be settled
                into a particular bank account shared by the customer.
              </li>
              <br />
              <li className="fw-bold">
                As we do not have a reverse pickup facility yet, you are
                requested to ship the product(s) back to us. Please pack the
                items securely to prevent any loss or damage during transit. In
                case of any defective product, the shipping charges will be
                bared by the company and if the wrong order is placed by the
                customer, then he/she have to bare the shipping cost.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

