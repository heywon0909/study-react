import React, { useEffect,useState } from 'react';

export default function ProductsTest() {
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked(prev => !prev);
    useEffect(() => {
        fetch(`data/${checked ? 'sale_' : ''}products.json`).then((res) => res.json()).then((data) => {
            console.log('결과');
            setProducts(data);
        })
        return () => {
            console.log('사라짐');
        }
    }, [checked]);
    return (
        <>
            <input type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor='checkbox'>Show Only hot Sale</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>  
        </>
    );
}

