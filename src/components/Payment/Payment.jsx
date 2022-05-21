import React, { useEffect, useState } from 'react';
import { Modal, Form, Button, Figure, Row, Col } from 'react-bootstrap';
import { createOrder } from '../../api/orders/orderEndpoints';
//import { useNavigate } from 'react-router-dom';

import creditCardImg from '../../assets/credit_card.jpg'

const Payment = ({ products, totalPrice, show, onHide }) => {

	const mp = new MercadoPago(import.meta.env.VITE_MERCADO_TOKEN, {
		locale: 'es-PE',
	});
	//const navigate = useNavigate();

	/*const [card, setCard] = useState({
		cvc: '',
		expiry: '',
		focus: '',
		name: '',
		number: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCard({ ...card, [name]: value });
	};*/

	useEffect(() => {
		if (show) {
			try {
				const cardForm = mp.cardForm({
					amount: totalPrice.toString(),
					autoMount: true,
					form: {
						id: 'form-checkout',
						cardholderName: {
							id: 'form-checkout__cardholderName',
							placeholder: 'Titular de la tarjeta',
						},
						cardholderEmail: {
							id: 'form-checkout__cardholderEmail',
							placeholder: 'E-mail',
						},
						cardNumber: {
							id: 'form-checkout__cardNumber',
							placeholder: 'Número de la tarjeta',
						},
						cardExpirationDate: {
							id: 'form-checkout__cardExpirationDate',
							placeholder: 'Data de vencimiento (MM/YYYY)',
						},
						securityCode: {
							id: 'form-checkout__securityCode',
							placeholder: 'Código de seguridad',
						},
						installments: {
							id: 'form-checkout__installments',
							placeholder: 'Cuotas',
						},
						identificationType: {
							id: 'form-checkout__identificationType',
							placeholder: 'Tipo de documento',
						},
						identificationNumber: {
							id: 'form-checkout__identificationNumber',
							placeholder: 'Número de documento',
						},
						issuer: {
							id: 'form-checkout__issuer',
							placeholder: 'Banco emisor',
						},
					},
					callbacks: {
						onFormMounted: (error) => {
							if (error)
								return console.warn('Form Mounted handling error: ', error);
							return console.log('Form mounted');
						},
						onSubmit: (event) => {
							event.preventDefault();
							const {
								paymentMethodId: payment_method_id,
								issuerId: issuer_id,
								cardholderEmail: email,
								amount,
								token,
								installments,
								identificationNumber,
								identificationType,
							} = cardForm.getCardFormData();

							const order = {
								totalPrice: 100,
								products: products.map(p => p.id),
								payment: {
									token,
									payer: {
										email,
										identification: {
											type: identificationType,
											number: identificationNumber,
										},
									},
									installments: Number(installments),
								}
							};
							console.log(`The following order <${JSON.stringify(order)} will be created`);
							createOrder(order);
						},
						onFetching: (resource) => {
							console.log('Fetching resource: ', resource);
						},
					},
				});
			} catch (error) {
				console.log(error);
			}
		}
	}, [show]);

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Row xs lg={12}>
					<Modal.Title id="contained-modal-title-vcenter">
						Pago con tarjeta
					</Modal.Title>
				</Row>
			</Modal.Header>
			<Modal.Body style={{ textAlign: 'center' }}>
				<Row>
					<Figure>
						<Figure.Image
							width={355}
							height={200}
							alt='Credit card'
							src={creditCardImg}
						/>
					</Figure>
				</Row>

				<Form id='form-checkout'>
					<Row>
						<Form.Group as={Col} className="mb-3" controlId='form-checkout__cardNumber'>
							<Form.Label>Número de la tarjeta</Form.Label>
							<Form.Control name='cardNumber' placeholder='1234 5678 9876 5432' />
						</Form.Group>

						<Form.Group as={Col} className="mb-3" controlId='form-checkout__cardholderName'>
							<Form.Label>Nombre y apellido</Form.Label>
							<Form.Control name='fullName' placeholder='John Doe' />
						</Form.Group>
					</Row>

					<Row>
						<Form.Group as={Col} className="mb-3" controlId='form-checkout__cardExpirationDate'>
							<Form.Label>Mes/Año de vencimiento</Form.Label>
							<Form.Control name='cardExpirationDate' placeholder='09/2019' />
						</Form.Group>

						<Form.Group as={Col} className="mb-3" controlId='form-checkout__securityCode'>
							<Form.Label>CVV/CVC</Form.Label>
							<Form.Control name='cardSecurityCode' placeholder='XXX' />
						</Form.Group>
					</Row>


					<Row>
						<Form.Group as={Col} className="mb-3" controlId='form-checkout__installments'>
							<Form.Label>Número de cuotas</Form.Label>
							<Form.Select name='installments'>
								<option>Sin cuotas</option>
							</Form.Select>
						</Form.Group>

						<Form.Group as={Col} className="mb-3" controlId='form-checkout__identificationType'>
							<Form.Label>Tipo de documento</Form.Label>
							<Form.Select name='identificationType'>
								<option>DNI</option>
							</Form.Select>
						</Form.Group>
					</Row>

					<Row>
						<Form.Group as={Col} className="mb-3" controlId='form-checkout__identificationNumber'>
							<Form.Label>Número de documento</Form.Label>
							<Form.Control name='identificationNumber' placeholder='12345678' />
						</Form.Group>

						<Form.Group as={Col} className="mb-3" controlId='form-checkout__cardholderEmail'>
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control name='email' placeholder='john.doe@gmail.com' />
						</Form.Group>
					</Row>

					<select
						name='issuer'
						id='form-checkout__issuer'
						style={{ display: 'none' }}
					/>

					<Button variant="dark" type="submit">
						Confirmar y pagar S/. {totalPrice.toFixed(2)}
					</Button>
				</Form>
			</Modal.Body>
		</Modal >
	);
};
export default Payment;
