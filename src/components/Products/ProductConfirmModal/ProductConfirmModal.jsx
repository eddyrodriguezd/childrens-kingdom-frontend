import { useState } from 'react';
import { Modal, Button, Col, Row } from 'react-bootstrap';

const ProductConfirmModal = ({ show, onHide, addProduct, item }) => {
    const { title, image, description, price } = item;

    const [quantity, setQuantity] = useState(1);

    const productConfirmed = () => {
        addProduct({ title, image, description, price, quantity });
        setQuantity(1);
        onHide();
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Cantidad:</h6>
                <Row>
                    <Col>
                        <Button variant="dark" size="sm" onClick={() => setQuantity(q => q - 1)}>-</Button>
                    </Col>
                    <Col>
                        <div>
                            {quantity}
                        </div>
                    </Col>
                    <Col>
                        <Button variant="dark" size="sm" onClick={() => setQuantity(q => q + 1)}>+</Button>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={productConfirmed}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProductConfirmModal;