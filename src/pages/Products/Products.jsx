import { findDOMNode } from 'react-dom';
import { Navigate, useLocation } from 'react-router-dom';
import ProductGrid from '../../components/Products/ProductGrid/ProductGrid';


const Products = ({ cartProducts, setCartProducts }) => {
    const categoryMap = {
        'Ropa': 'clothes',
        'Alimentación': 'food',
        'Juguetes y juegos': 'toys',
        'Salud e higiene': 'health',
        'Arte y creatividad': 'art'
    };

    const location = useLocation();

    if (location.state == null || location.state.category == null)
        return <Navigate to='/' />;

    const { category } = location.state;

    return (
        <>
            <ProductGrid categoryName={categoryMap[category.name]} cartProducts={cartProducts} setCartProducts={setCartProducts} />
        </>
    );
}

export default Products;