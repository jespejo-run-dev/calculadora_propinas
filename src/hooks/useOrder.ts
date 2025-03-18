import { useState } from "react";
import type {MenuItem, OrderItem} from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);
    
    const additem = (item: MenuItem) => {

        const newItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }

    console.log(order);
    

    return {
        additem
    }
}