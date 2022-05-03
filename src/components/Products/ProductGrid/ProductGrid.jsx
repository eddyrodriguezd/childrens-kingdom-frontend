import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { getAllProducts } from '../../../api/products/productsEndpoints';

const ProductGrid = (/*products*/) => {
    const {loading, data} = getAllProducts(null);

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
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        colors={item.colors}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default ProductGrid;