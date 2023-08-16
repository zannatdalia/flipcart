import React from 'react';
import {FaRegTrashAlt} from "react-icons/fa";

const ReviewItem = ({product, handleReviewItem}) => {
    const {id, img, name, price, shipping } = product
       return (
        <div className={'flex flex-row border rounded border-gray-400 p-2'}>
            <div className={''}>
                <img className={'w-20 h-20 rounded'} src={img} alt=""/>
            </div>
            <div className={'flex-1 ml-5'}>
                <h2 className={'font-semibold'}>{name}</h2>
                <p>Price: ${price}</p>
                <p>Shipping Charge: ${shipping}</p>
            </div>
            <div className={'my-auto   mr-5'}>
                <button className={'h-20 w-20 rounded-full bg-red-200 text-red-500 '} onClick={()=>handleReviewItem(id)}><FaRegTrashAlt className={'h-10 w-10'}></FaRegTrashAlt></button>
            </div>
        </div>
    );
};

export default ReviewItem;