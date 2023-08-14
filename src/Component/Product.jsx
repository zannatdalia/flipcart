import React from 'react';
import {BsCart, BsCartPlus} from "react-icons/bs";

const Product = (props) => {
    const handleProduct = props.handleProduct
       const {name, seller, ratingsCount, price, img} = props.product
    return (
        <div className={'w-72 h-[400px]  border border-gray-400 rounded-md flex flex-col justify-between'}>
            <div className={'h-3/6 p-1'}>
                <img className={'h-full w-full object-cover rounded-md'} src={img} alt=""/>
            </div>
            <div className={'h-3/6 flex flex-col'}>
                <div className={'p-2 h-full'}>
                    <h6 className={'font-semibold capitalize line-clamp-1'}>{name}</h6>
                    <p>Price: <span className={'font-medium'}>{price}</span></p>
                </div>
                <div className={'text-sm flex flex-col'}>
                    <div className={'p-2 text-sm'}>
                        <p className={''}>Manufacturer: {seller}</p>
                        <p>Rating: {ratingsCount}</p>
                    </div>
                    <button className={'h-10 bg-amber-200 w-full place-content-end rounded-b-md rounded-t-none'} onClick={()=>handleProduct(props.product)}>
                           <div className={'flex flex-row items-center justify-center space-x-2'}>
                                <p>Add To Cart</p>
                               <BsCartPlus className={'w-4 h-4'}></BsCartPlus>
                           </div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Product;