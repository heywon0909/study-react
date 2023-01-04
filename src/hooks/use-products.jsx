import { useEffect, useState } from 'react';
export default function useProducts({salesOnly}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        fetch(`data/${salesOnly ? 'sale_' : ''}products.json`).then((res) => res.json()).then((data) => {
            console.log('결과');
            setProducts(data);
        }).catch(e => setError(e))
            .finally(() => setLoading(false));
        return () => {
            console.log('사라짐');
           
        }
    
    
    }, [salesOnly]);
    return [loading, error, products];
}

