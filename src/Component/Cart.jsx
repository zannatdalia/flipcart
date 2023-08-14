import React from 'react';

const Cart = ({cart}) => {
    let totalPrice =0, totalShippingPrice =0, tax =0, grandTotal=0;
    let quantity = 0;

    for (const product of cart) {
        product.quantity = product.quantity||1;
        totalPrice= totalPrice+product.price * product.quantity;
        totalShippingPrice= totalShippingPrice+product.shipping;
        quantity = quantity+product.quantity;
    }
    tax = totalPrice*7/100;
    grandTotal = totalPrice+totalShippingPrice+tax;
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
            <div className={'flex flex-col items-center'}>
                <button className={'w-1/3 bg-red-700'}>Clear Cart</button>
                <button className={'w-1/3 bg-yellow-600 mt-5'}>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;