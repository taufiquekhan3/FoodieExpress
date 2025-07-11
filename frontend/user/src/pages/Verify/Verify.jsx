import React, { useContext } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Verify = () => {

   const [searchParams,setSearchParams] = useSearchParams();
   const success = searchParams.get("success");
   const orderId = searchParams.get("orderId");
   const {url} = useContext(StoreContext)
   const navigate = useNavigate();

   console.log(success,orderId);

   const verifyPayment = async () => {
    const reponse = await axios.post(url+"/api/order/verify",{success,orderId})
    if (response.data.success) {
         navigate("/myorders");
    }
    else {
        navigate("/")
    }
   }

  return (
    <div>
        <div className="verify">
            <div className="spinner"></div>
        </div>
      
    </div>
  )
}

export default Verify
