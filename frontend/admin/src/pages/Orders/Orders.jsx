import React, { useState } from 'react'
import './Orders.css'
import { toast } from "react-toastify"
import axios from 'axios'
import { assets } from '../../../../src/assets/assets'

const Orders = () => {

  const [order, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event,orderId) => {

      const response = await axios.post(url+"/api/order/status",{
        orderId,
        status:event.target.value
      })
      if (response.data.success) {
        await fetchAllOrders();
      }
        console.log(event,orderId)
  }


  // useEffect(({url}) => {
  //   fetchAllOrders()
  // }, [])

  return (
    <div>
      <div className="order add">
          <h3>order page</h3>
          <div className="order-list">
            {orders.map((order,index) => {
              <div key={index} className="order-item">
                  <img src={assets.parcel_icon} alt="" /> 
                  <div>
                    <p className="order-item-food">
                      {order.items.map((item,index) => {
                        if(index===orders.item.length-1) {
                          return item.name + "*" + item.quantity
                        }
                        else {
                          return item.name + " * "+item.quantity + ","
                        }
                      })}
                    </p>
                    <p className='order-item-name'>{order.address.firstname+" "+order.address.lastName}</p>
                    <div className="order-item-address">
                      <p>{order.address.street+","}</p>
                      <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode} </p>
                    </div>
                    <p className='order-item-phone'>{order.address.phone}</p>
                  </div>
                  <p>Items: {order.items.length}</p>
                  <p>${order.amount}</p>
                  <select onChange={(event) => statusHandler(event,order._id)} value={order.status} name="" id="">
                    <option value="Food Processing"></option>
                    <option value="Out for delivery"></option>
                    <option value="Delivered"></option>
                  </select>
              </div>
            })}
          </div>
      </div>
    </div>
  )
}

export default Orders
