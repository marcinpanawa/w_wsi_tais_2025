import { useContext, useEffect, useState } from "react";
import { CreatedAppContext } from '../../Store/AppContext';
import {
  Button
} from "reactstrap";

const CartLine = ({ line }) => (
  <li className="list-group-item d-flex justify-content-between lh-sm">
    <div>
      <h6 className="my-0">{line.name}</h6>
      <small className="text-muted">{line.description}</small>
    </div>
    <span className="text-muted">{line.price}</span>
  </li>
)

const Cart = ({ order }) => {
  const { clearOrder } = useContext(CreatedAppContext);
  

  const orderCount = order.list ? order.list.length : 0;
  let amountOrder = 0;

  order.list.forEach(e => amountOrder = amountOrder + e.price);

  return (
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Your cart</span>
        <span className="badge bg-primary rounded-pill">{orderCount}</span>
      </h4>
      <ul className="list-group mb-3">

        {
          order.list.map(element => <CartLine line={element} />)
        }

        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>${amountOrder}</strong>
        </li>
      </ul>
      <Button
                        className="btn-accept"
                        color="primary"
                        onClick={() => clearOrder()}>Clear cart
                    </Button>
    </div>
  )
}

const Basket = () => {
  const { AppStore, setOrderDetail, PlaceOrder } = useContext(CreatedAppContext);

  return (
    <>
      <div className="row g-5">
        <Cart order={AppStore.order} />
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate="">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" onChange={setOrderDetail} className="form-control" id="firstName" placeholder="" value={AppStore.order.details.firstName} required="" />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" onChange={setOrderDetail} className="form-control" id="lastName" placeholder="" value={AppStore.order.details.lastName} required="" />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input type="text" onChange={setOrderDetail} className="form-control" id="username" placeholder="Username" value={AppStore.order.details.username} required="" />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                <input type="email" onChange={setOrderDetail} className="form-control" id="email" value={AppStore.order.details.email} placeholder="you@example.com" />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" onChange={setOrderDetail} className="form-control" id="address" value={AppStore.order.details.address} placeholder="1234 Main St" required="" />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" onChange={setOrderDetail} className="form-control" id="address2" value={AppStore.order.details.address2} placeholder="Apartment or suite" />
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Country</label>
                <select onChange={setOrderDetail} className="form-select" id="country" value={AppStore.order.details.country} required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <select onChange={setOrderDetail} className="form-select" id="state" value={AppStore.order.details.state} required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" onChange={setOrderDetail} className="form-control" id="zip" placeholder="11-520" value={AppStore.order.details.zip} required="" />
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>

            </div>

            <hr className="my-4" />

            <div className="form-check">
              <input type="checkbox" onChange={setOrderDetail} className="form-check-input" checked={AppStore.order.details.sameAddress == "on"} id="sameAddress" />
              <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>

            <div className="form-check">
              <input type="checkbox" onChange={setOrderDetail} className="form-check-input" id="saveInfo" />
              <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input id="credit" onChange={e => setOrderDetail(e, ['paypal', 'debit'])} name="paymentMethod" type="radio" className="form-check-input" checked={AppStore.order.details.credit == "on"} required="" />
                <label className="form-check-label" htmlFor="credit">Credit card</label>
              </div>
              <div className="form-check">
                <input id="debit" onChange={e => setOrderDetail(e, ['credit', 'paypal'])} name="paymentMethod" type="radio" className="form-check-input" checked={AppStore.order.details.debit == "on"} required="" />
                <label className="form-check-label" htmlFor="debit">Debit card</label>
              </div>
              <div className="form-check">
                <input id="paypal" onChange={e => setOrderDetail(e, ['debit', 'credit'])} name="paymentMethod" type="radio" className="form-check-input" checked={AppStore.order.details.paypal == "on"} required="" />
                <label className="form-check-label" htmlFor="paypal">PayPal</label>
              </div>
            </div>

            <hr className="my-4" />

            
          </form>
          <button className="w-100 btn btn-primary btn-lg" onClick={PlaceOrder}>Place an order</button>
        </div>
      </div>


    </>
  )


}


export default Basket;