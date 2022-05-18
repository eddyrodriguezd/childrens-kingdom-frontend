import { useState } from 'react';
import { Modal, Button, Col, Row, Form, Figure } from 'react-bootstrap';

const CreateEditModal = ({ show, onHide, saveProduct, item }) => {

    const [formItem, setFormItem] = useState(item);

    const onSaveClick = () => {
        if (item.description != formItem.description && item.price != formItem.price) {
            saveProduct();
        }
    }

    const onFormChange = (target) => {
        setFormItem({ ...formItem, [target.id]: target.value });
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {item == null ? "Crear Producto" : "Editar Producto"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onChange={e => onFormChange(e.target)}>
                    <Form.Group className='mb-3' controlId='title'>
                        <Form.Label>Título</Form.Label>
                        <Form.Control defaultValue={item?.title} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='img'>
                        <Form.Label>Imagen:</Form.Label>
                        <Figure style={{paddingRight: '1rem', paddingLeft: '1rem'}}>
                            <Figure.Image
                                width={200}
                                height={200}
                                alt={item?.title}
                                src={item?.image}
                            />
                        </Figure>
                        <Button variant="primary" onClick={onSaveClick}>
                            {item == null ? "Añadir imagen" : "Modificar imagen"}
                        </Button>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='description'>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={5} defaultValue={item?.description} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='price'>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control defaultValue={item?.price} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={onSaveClick}>Guardar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateEditModal