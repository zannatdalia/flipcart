import React from 'react';

const Header = () => {
    return (
        <nav className={'bg-gray-800 h-16 w-full flex flex-row  p-5 justify-between'}>
            <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="flipcart.."/>
            <div className={'my-auto '}>
                <a className={'px-5 text-white'} href="/">Shop</a>
                <a className={'px-5 text-white'} href="/orders">Order Review</a>
                <a className={'px-5 text-white'} href="/inventory">Manage Inventory</a>
                <a className={'px-5 text-white bg'} href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;