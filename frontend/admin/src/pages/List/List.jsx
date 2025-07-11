import React, { useState } from 'react'
import './List.css'
import axios from 'axios';

const List = () => {

    const [list, setList] = useState([]);

    const fetchList = async () => {
        const response = await axios.get()
    }

    return (

       <>
        <div className='list-table-format title'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
        </div>
    {
        list.map((item, index) => {
            return (
                <div key={index} className='list-table-format' >
                    <img src={`${url}/images/` + item.image} alt="" />
                    <p>{item.name} </p>
                    <p>{item.category} </p>
                    <p>{item.price} </p>
                    <p>X </p>
                </div>
            )
        })
    }
</>
)

}

export default List
