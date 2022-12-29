import React,{useState} from 'react';
import './App.css'
import ProductsTest from './components/ProductsTest';
export default function AppProductsTest() {
    const [showProducts, setShowProducts] = useState(false);
    return (
        <div>
            {showProducts && <ProductsTest/>}
            <button onClick={()=>setShowProducts((prev)=> !prev)}>toggle</button>        
        </div>
    );
}

