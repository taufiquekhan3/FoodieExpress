import { createContext, useEffect, useState } from "react";
import {food_list} from "../assets/assets.js"
import axios from "axios";

export const StoreContext = createContext(null) // creating shared object


const StoreContextProvider = (props) => {    // Stores and manages global state like cart, token, etc.

    const [cartItems, setCartItems] = useState({});
    
    const url = "http://localhost:4000";
    
    const [token,setToken] = useState("")
    // const [food_list,setFoodList] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
        }
         if (token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
         }  
    } 

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

   
    const getTotalCartAmount = (itemId) => {
        let totalAmount = 0;  console.log(cartItems);
         for (const item in cartItems) {
          
            
            if(cartItems[item]>0) {
                let iteminfo = food_list.find((product) => product._id === item)
                totalAmount += iteminfo.price * cartItems[item];
            }
         }
         return totalAmount;
    }

 
    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
        console.log(food_list)
    }


    useEffect(() => {
        
        async function loadData() {
            await fetchFoodList()
            if(localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        } 
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        url
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;