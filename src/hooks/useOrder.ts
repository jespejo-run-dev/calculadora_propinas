import { useState } from "react";
import type {MenuItem, OrderItem} from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);
    
    const additem = (item: MenuItem) => {
        console.log(item);
    }

    return {
        additem
    }
}