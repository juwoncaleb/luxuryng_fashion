import React from 'react'
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";

const items = useSelector(selectItems);

import Items from '../app/Items';
`${console.log(Items)}`
function PaystackButton() {
  return (
    <div>PaystackButton</div>
  )
}

export default PaystackButton