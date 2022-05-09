import { useLocation } from 'react-router-dom';
import ProductGrid from '../../components/Products/ProductGrid/ProductGrid';


const Products = ({ cartProducts, setCartProducts}) => {
    const location = useLocation();
	if (location.state == null || location.state.category == null)
		return <Navigate to='/' />;
    const { category } = location.state;

    return (
        <>
            <ProductGrid category={category} cartProducts={cartProducts} setCartProducts={setCartProducts}/>
        </>
    );
}

export default Products;