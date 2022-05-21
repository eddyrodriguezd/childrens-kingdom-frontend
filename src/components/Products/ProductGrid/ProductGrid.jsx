import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { getAllProductsByCategory } from '../../../api/products/productsEndpoints';
import ProductConfirmModal from '../ProductConfirmModal/ProductConfirmModal';

const ProductGrid = ({ categoryName, setCartProducts }) => {

    const { loading, data } = getAllProductsByCategory(categoryName);

    const [modalShow, setModalShow] = useState(false);
    const [item, setItem] = useState({});

    const showModalToConfirmProduct = (item) => {
        setModalShow(true);
        setItem(item);
    }

    const addProductToCart = (item) => {
        console.log('additem', item);
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
                {data != null && data.map((item) => {
                    return (
                        <ProductCard
                            key={item._id}
                            id={item._id}
                            title={item.title}
                            image={item.url}
                            description={item.description}
                            price={item.price}
                            colors={item.colors}
                            showConfirmModal={showModalToConfirmProduct}
                        />);
                }
                )}
            </Row>

            <ProductConfirmModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                addProduct={addProductToCart}
                item={item}
            />
        </Container>
    );
}

export default ProductGrid;