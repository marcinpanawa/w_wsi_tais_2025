import { useContext, useEffect, useState } from "react";
import { CreatedAppContext } from '../Store/AppContext';
import {
  Button
} from "reactstrap";
import withData from "../Components/HOC/withData";

const CartLine = ({ line, buy }) => {
  const { addToOrder, AppStore } = useContext(CreatedAppContext);



  return (<li className="list-group-item justify-content-between lh-sm">
    <div className="row">
      <div className="col-10">
        <div>
          <h6 className="my-0">{line.name}</h6>
          <small className="text-muted">{line.description}</small>
        </div>
        <span className="text-muted">{line.price}</span>
      </div>
      <div className="col col-2">
        {AppStore.session.loggedIn &&
          //     <Button
          //     className="btn-accept"
          //     color="primary"
          //     onClick={() => addToOrder(line)}>Add to cart
          // </Button>

          <button type="button" className="btn btn-primary" onClick={() => addToOrder(line)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
            </svg>
          </button>

        }
      </div>

    </div>
  </li>
  )
}
const StoreList = ({ store }) => {
  console.log('StoreList', store)
  return (
    <div className="col-12 store-md-last">
      <ul className="list-group mb-3">
        {
          store.map(element => <CartLine line={element} />)
        }
      </ul>
    </div>
  )
}


const Store = (props) => {
  const { AppStore } = useContext(CreatedAppContext);
  console.log('props', props)
  return (
    <div className="col">
      <h1>Store page</h1>
      {props.items &&
        <StoreList store={props.items.response} buy={AppStore.session.loggedIn} />
      }
    </div>
  )
}

export default withData(Store);