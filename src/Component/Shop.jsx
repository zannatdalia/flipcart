import React, {useEffect, useState} from 'react';
import Product from "./Product.jsx";
import Cart from "./Cart.jsx";
import {addToDb, getShoppingCart} from "../utilities/fakedb.js";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const handleProduct = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    useEffect(()=>{
        const storedCard=getShoppingCart()
        const savedCart = [];
        //get id
        for (const id in storedCard) {
            const addedProduct = products.find((product) => product.id===id)
            if (addedProduct){
                const quantity = storedCard[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])
    useEffect(()=>{
        fetch('products.json').then(res=>res.json()).then(data=>setProducts(data))
    },[])
    return (
        <div className={'grid grid-cols-4 p-10'}>
            <div className={'col-span-3 w-full px-20'}>
                <div className={'grid grid-cols-4 justify-between gap-4'}>
                    {
                        products.map((product)=><Product
                            key = {product.id}
                            product = {product}
                            handleProduct = {handleProduct}
                        ></Product>)
                    }
                </div>
            </div>
            <div className={'bg-[#FFE0B3] w-full '}>
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;