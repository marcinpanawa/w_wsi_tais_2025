import { useState, useEffect, createContext } from "react";
import { config } from "../config";
import Swal from 'sweetalert2'

const orderDefault = {
    order: {
        list: [],
        details: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            address: "",
            address2: "",
            country: "",
            state: "",
            zip: "",
            sameAddress: "",
            saveInfo: "",
            credit: "",
            debit: "",
            paypal: "",
        }
    }
}

const sessionDefault = {
    session: {
        loggedIn: false,
        userName: null,
        token: null,
        exp: null,
        default: true
    }
}

const modalDefault = {
    modal: {
        login: false,
        register: false
    }
}

const showSwalError = (message) => {
    Swal.fire({
        title: "Error",
        text: message,
        icon: "error"
      });
    
    }

const showSwalMessage = (res) => {
        Swal.fire({
        title: res.title?res.title:"Good job!",
        text: res.message,
        icon: "success"
    });
    }

const orderPostJSON = async (data) => {
    try {
        const response = await fetch(`${config.backend}${config.endpoints.placeOrder}`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Success:", result);
        showSwalMessage(result.message);
        return result;
    } catch (error) {
        console.log("Error:", error);
    }
}


const setLocalStorageItem = (localStorageKey, itemValue) => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(itemValue));
}

const getLocalStorageItem = (localStorageKey) => {
    return JSON.parse(window.localStorage.getItem(localStorageKey));
}

export const AppContext = ({ children }) => {
    const [order, setOrder] = useState(orderDefault);
    const [session, setSession] = useState(sessionDefault);
    const [modal, setModal] = useState(modalDefault);
    const [settings, setSettings] = useState();

    useEffect(() => {
        if (getLocalStorageItem('session')) setSession(getLocalStorageItem('session'))
        if (getLocalStorageItem('order')) setOrder(getLocalStorageItem('order'));

        setSettings({ loaded: true });

    }, [])

    useEffect(() => {
        if (session != sessionDefault) {
            setLocalStorageItem('session', session);
        }
        // if (!session)  {
        //         //fetch BE - destroy session
        // }

    }, [session])


    useEffect(() => {
        if (order != orderDefault) {
            console.log('ORDER changed', order)
            setLocalStorageItem('order', order);
        }
    }, [order])

  const handleFetch = async (method, formData) => {
    const localFetch = fetch;
    const AppStore = window.AppStore;
    try {
      const res = await localFetch('https://catfact.ninja/fact', {
        
        method: method?method:'POST',
        headers: {
          'Authorization': `Bearer ${AppStore.token?AppStore.token:''}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log('Response data', data)
      return({data});
    } catch (err) {
      return({err});
    }
  };
  
    const AppStore = {
        ...order,
        ...session,
        ...modal,
        ...settings,handleFetch        
    }

    const addToOrder = (item) => {
        console.log('Added to store!', item._id);
        if (order && order.order.list) {
            const newOrderList = order.order.list.push(item);
            const newOrder = { ...order, list: newOrderList }
            showSwalMessage({message:"Added to basket"})
            setOrder(newOrder);
        }
    }

    const removeFromOrder = (id) => {
        console.log('Remove from store!', id);
        if (order && order.list.length > 0) {
            const newOrderList = order.order.list.filter(item => item._id != id);
            const newOrder = { ...order, list: newOrderList }
            setOrder(newOrder);
        }
    }

    const clearOrder = (id) => {
        let newOrder = { ...order }
        newOrder.order.list = []
    
        setOrder(newOrder);
    }


    const setOrderDetail = (props, clearDetailArray) => {
console.log('setOrderDetail',props)
        let newOrder = { ...order };
        if (props.target.type != "checkbox" && props.target.type != "radio") newOrder.order.details[props.target.id] = props.target.value
        else {
            if (order.order.details[props.target.id]) newOrder.order.details[props.target.id] = ''
            else newOrder.order.details[props.target.id] = props.target.value

        }
        if (clearDetailArray && Array.isArray(clearDetailArray)) {
            console.log('clearing', clearDetailArray)
            clearDetailArray.forEach(element => newOrder.order.details[element] = '')
        }
        setOrder(newOrder)
    }

    const PlaceOrder = () => {
        console.log('PlaceOrder.....')
        const newOrder= {
            order:  order,
            token: session.token
        }
        orderPostJSON(newOrder);
        showSwalMessage('Order placed');
    }

if (process.env.NODE_ENV === 'development') window.AppStore = AppStore;
else window.AppStore = process.env.NODE_ENV

    return (
        <CreatedAppContext.Provider value={{ AppStore, setOrder, setSession, setModal, addToOrder, removeFromOrder, setOrderDetail, clearOrder, PlaceOrder }}>
            {children}
        </CreatedAppContext.Provider>
    )
}






export const CreatedAppContext = createContext();



const x = {
    "loggedIn": true,
    "userName": "1",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEiLCJyb2xlIjoidXNlciIsImlhdCI6MTcxNzkyNDUxOCwiZXhwIjoxNzE3OTYwNTE4fQ.ugWjar658n2mGP21PIhqbB8tCs9ZEX9MKtirggSeQEI",
    "exp": 123
}