import React, {useState} from 'react';
import Cart from "./Cart.jsx";
import {useLoaderData} from "react-router-dom";
import ReviewItem from "./ReviewItem.jsx";
import {removeFromDb} from "../utilities/fakedb.js";

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState([savedCart])
    const handleReviewItem = (id)=>{
       const reamainingCart = savedCart.filter((product)=>product.id!==id)
        setCart(reamainingCart)
        removeFromDb(id)
    }
    return (
        <div className={'grid grid-cols-4 p-10 '}>
            <div className={'col-span-3 w-full px-20'}>
                <div className={'flex flex-col justify-between gap-4'}>
                    {
                        savedCart.map((product) => <ReviewItem
                        key = {product.id}
                        product = {product}
                        handleReviewItem ={handleReviewItem}
                        ></ReviewItem>)
                    }
                </div>
            </div>
            <div className={'bg-[#FFE0B3] w-full ml-10'}>
                <Cart checkOutButton={true} cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;