import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { getAllProductsByCategory } from '../../../api/products/productsEndpoints';

const ProductGrid = ({ category, cartProducts, setCartProducts }) => {
    const { name } = category;

    const { loading, data } = getAllProductsByCategory('food');

    const addProductToCart = (item) => {
        item = {
            ...item,
            quantity: 1
        }
        setCartProducts(
            old => [
            ...old,
            item]
        );
        console.log(cartProducts);
    };

    return (
        <Container style={{ margin: '4rem' }}>
            <Row>
                {loading && (
                    <div className='alert alert-secondary text-center'>
                        Cargando productos..
                    </div>
                )}
            </Row>
            <Row>
                {data != null && data.map((item) => (
                    <ProductCard
                        key={item.id}
                        title={item.title}
                        image={item.url}
                        description={item.description}
                        price={item.price}
                        colors={item.colors}
                        addProductToCart={addProductToCart}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default ProductGrid;