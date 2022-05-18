import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCreateEditCard from '../ProductCreateEditCard/ProductCreateEditCard';
import { getAllProductsByCategory } from '../../../api/products/productsEndpoints';
import CreateEditModal from '../CreateEditModal/CreateEditModal';

const AdminProductGrid = ({ cartProducts, setCartProducts }) => {

    const { loading, data } = getAllProductsByCategory("food");

    const [modalShow, setModalShow] = useState(false);
    const [item, setItem] = useState({});

    const showModalToCreateOrEdit = (item) => {
        setModalShow(true);
        setItem(item);
    }

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
                            showModal = {showModalToCreateOrEdit}/>
                    </Col>
                ))}
            </Row>

            <CreateEditModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                item={item}
            />
        </Container>
    );
}

export default AdminProductGrid;