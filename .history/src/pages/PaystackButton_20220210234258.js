import React from 'react'
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";


import Items from '../app/Items';
function PaystackButton() {
  const items = useSelector(selectItems);

  return (
    <div>PaystackButton</div>
  )
}

export default PaystackButton