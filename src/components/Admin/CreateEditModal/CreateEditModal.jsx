import axios from 'axios';
import { useEffect } from 'react';
import { Modal, Button, Form, Figure, Row, Col } from 'react-bootstrap';

const CreateEditModal = ({ show, onHide, item, file, setFile, formItem, setFormItem }) => {

    useEffect(() => {
        setFormItem(item);
    }, []);

    const onButtonClick = (e) => {
        e.preventDefault();
        document.getElementById('getFile').click();
    };

    const onFileUpload = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }

    const onSaveClick = () => {
        if (item == null) { //New product
            if(formItem.category == null) formItem.category = 'clothes';
            saveProduct();
            hideModal();
        }
        else { //Update product
            if (item.description != formItem.description || item.price != formItem.price || file != null) {
                console.log('Product will be saved');
                saveProduct();
                hideModal();
            }
        }
    }

    const onFormChange = (target) => {
        setFormItem({ ...formItem, [target.id]: target.value });
    }

    const saveProduct = () => {
        const productFormData = new FormData();
        productFormData.append('title', formItem.title == null ? item.title : formItem.title);
        productFormData.append('description', formItem.description == null ? item.description : formItem.description);
        productFormData.append('price', formItem.price == null ? item.price : formItem.price);
        productFormData.append('image', file == null ? item.image : file);
        productFormData.append('category', formItem.category == null ? item.category : formItem.category);

        const url = import.meta.env.VITE_BACKEND_ENDPOINT.concat('products');

        axios({
            method: 'post', url, data: productFormData,
            headers: { 'Content-Type': 'multipart/form-data' }, /*, withCredentials: true*/
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(errorMessage);
                }
                console.log('Successful save');
            })
            .catch((err) => {
                console.log('Oops!', err);
            });
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
                    <Form.Group style={{ paddingTop: '0.5rem', paddingBottom: '2rem' }} controlId='category'>
                        <Form.Label>Categoría</Form.Label>
                        <Form.Select>
                            <option value='clothes'>Ropa</option>
                            <option value='food'>Alimentación</option>
                            <option value='toys'>Juguetes y juegos</option>
                            <option value='health'>Salud e higiene</option>
                            <option value='art'>Arte y creatividad</option>
                        </Form.Select>
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
                                        src={file == null ? item?.image : URL.createObjectURL(file)}
                                    />
                                </Figure>
                            </Col>
                            <Col style={{ margin: 'auto' }}>
                                <Button type='file' variant="primary" onClick={(e) => onButtonClick(e)}>
                                    {item == null ? "Añadir imagen" : "Modificar imagen"}
                                </Button>
                                <input id='getFile' type='file' style={{ display: 'none' }} onChange={(e) => onFileUpload(e)}></input>
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

export default CreateEditModal;