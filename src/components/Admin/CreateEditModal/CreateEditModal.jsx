import { useEffect, useState } from 'react';
import { Modal, Button, Form, Figure, Row, Col } from 'react-bootstrap';

const CreateEditModal = ({ show, onHide, saveProduct, item, file, setFile }) => {

    const [formItem, setFormItem] = useState(item);

    const onButtonClick = (e) => {
        e.preventDefault();
        document.getElementById('getFile').click();
    };

    const onFileUpload = (e) => {
        console.log("yeeeh");
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        console.log("file", file);
    }, file);

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
                        <Row style={{ margin: 'auto' }}>
                            <Col style={{ margin: 'auto' }}>
                                <Form.Label>Imagen:</Form.Label>
                                <Figure style={{ paddingRight: '1rem', paddingLeft: '1rem' }}>
                                    <Figure.Image
                                        width={200}
                                        height={200}
                                        alt={item?.title}
                                        src={file == null ? item?.image: file}
                                    />
                                </Figure>
                            </Col>
                            <Col style={{ margin: 'auto' }}>
                                <Button type='file' variant="primary" onClick={(e) => onButtonClick(e)}>
                                    {item == null ? "Añadir imagen" : "Modificar imagen"}
                                </Button>
                                <input id='getFile' type='file' style={{display:'none'}} onChange={(e) => onFileUpload(e)}></input>
                            </Col>
                        </Row>
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