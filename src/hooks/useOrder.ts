import { useState } from "react";
import type {OrderItem} from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);
    
    const additem = () => {
        console.log('agregando...');
        
    }

    return {
        additem
    }
}