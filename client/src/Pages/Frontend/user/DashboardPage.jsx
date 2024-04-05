import React, { useEffect, useState } from 'react'
import Dashboard from '../../../components/Frontend/user/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from "js-cookie";

function DashboardPage() {

    const [cart, setCart] = useState({})
    const { customer } = useSelector((state)=> ({...state}))
    const dispatch = useDispatch();


    const allCart = async () => {
  
      try {
        const res = await fetch(`http://localhost:8000/all-cart`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${customer.token}`,
          },
        });
  
  
        const data = await res.json();
  
        setCart(data);
  
        dispatch({ type: "STORE", payload: data });
          Cookies.set("cart", JSON.stringify(data));
  
      } catch (error) {
        console.log(error)
  
      }
  
    };
  
    useEffect(() => {
      allCart();
    }, []);

    console.log(cart)


    return (
        <>
            <Dashboard />
        </>
    )
}

export default DashboardPage