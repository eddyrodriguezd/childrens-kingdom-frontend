import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCreateEditCard from '../ProductCreateEditCard/ProductCreateEditCard';
import { getAllProductsByCategory } from '../../../api/products/productsEndpoints';

const AdminProductGrid = ({ cartProducts, setCartProducts, showModalToEdit }) => {

    const { loading, data } = getAllProductsByCategory("food");

    return (
        <Container style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
            <Row>
                {loading && (
                    <div className='alert alert-secondary text-center'>
                        Cargando productos..
                    </div>
                )}
            </Row>
            <Row>
                {data != null && data.map((item) => (
                    <Col xs lg={12}>
                        <ProductCreateEditCard
                            key={item.id}
                            title={item.title}
                            image={item.url}
                            description={item.description}
                            price={item.price}
                            colors={item.colors} 
                            showModal = {showModalToEdit}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AdminProductGrid;