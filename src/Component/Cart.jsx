import React from 'react';
import {BsCalendar2Check} from "react-icons/bs";
import {FaRegTrashAlt} from "react-icons/fa";
import {AiOutlineArrowRight} from "react-icons/ai";

const Cart = (props) => {
    const cart = props.cart
    const checkOutButton = props.checkOutButton
    let totalPrice = 0, totalShippingPrice = 0, tax = 0, grandTotal = 0;
    let quantity = 0;

    for (const product of cart) {
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingPrice = totalShippingPrice + product.shipping;
        quantity = quantity + product.quantity;
    }
    tax = totalPrice * 7 / 100;
    grandTotal = totalPrice + totalShippingPrice + tax;
    return (
        <div className={'p-5'}>
            <h1 className={'text-center'}>Order Summery</h1>
            <div className={'m-5 p-2 flex flex-col'}>
                <h3>Selected Items: {quantity}</h3>
                <h3>Total Price: {totalPrice}</h3>
                <h3>Total Shipping Charge: {totalShippingPrice}</h3>
                <h3>Tax: {tax}</h3>
                <h3 className={'font-bold'}>Grand Total:{grandTotal}</h3>
            </div>
            <div className={'flex flex-col'}>
                <button className={'w-full bg-red-700 flex flex-row justify-center'}>Clear Cart <FaRegTrashAlt
                    className={'ml-2 my-auto'}></FaRegTrashAlt></button>
                {
                    checkOutButton ? <button
                            className={'flex flex-row w-full bg-yellow-600 mt-5 justify-center'}>Checkout <BsCalendar2Check
                            className={'ml-2 my-auto'}></BsCalendar2Check></button>
                        : <button className={'w-full bg-yellow-600 mt-5 justify-center flex flex-row'}>Review
                            Order<AiOutlineArrowRight className={'ml-2 my-auto'}></AiOutlineArrowRight></button>

                }

            </div>
        </div>
    );
};

export default Cart;