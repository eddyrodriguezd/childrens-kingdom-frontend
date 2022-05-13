import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { getAllProductsByCategory } from '../../../api/products/productsEndpoints';

const ProductGrid = ({ categoryName, cartProducts, setCartProducts }) => {

    const { loading, data } = getAllProductsByCategory(categoryName);

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
                {!loading && data == null && (
                    <div className='alert alert-danger text-center'>
                        No hay productos disponibles de esta categoría
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