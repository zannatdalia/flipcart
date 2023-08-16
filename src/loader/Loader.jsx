import {getShoppingCart} from "../utilities/fakedb.js";

const productCartLoader = async ()=>{
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();
    const storedCart = getShoppingCart()
    const savedCart =[]

    for (const id in storedCart) {
        const addedProducts = products.find((pd)=>pd.id===id)
        addedProducts.quantity = storedCart[id]
        savedCart.push(addedProducts)
    }
    return savedCart;
}
export default productCartLoader