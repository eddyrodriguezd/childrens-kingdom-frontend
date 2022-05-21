import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import OrderSummaryCard from '../../components/ShoppingCart/OrderSummaryCard/OrderSummaryCard';
import ShoppingCartGrid from '../../components/ShoppingCart/ShoppingCartGrid/ShoppingCartGrid';
import Payment from '../../components/Payment/Payment';

const ShoppingCart = ({ cartProducts }) => {

    const [modalShow, setModalShow] = useState(false);

    const [productsPrice, setProductsPrice] = useState(0);
    const deliveryPrice = 9.99;

    const onUpdatePrice = (id, quantity) => {
        if (id != null && quantity > 0) {
            cartProducts.filter(prd => prd.id == id)[0].quantity = quantity;
            setProductsPrice(!!cartProducts && cartProducts.reduce((n, { price, quantity }) => n + price * quantity, 0));
        }
    }

    useEffect(() => {
        if (cartProducts.length != 0) {
            setProductsPrice(!!cartProducts && cartProducts.reduce((n, { price, quantity }) => n + price * quantity, 0));
        }
    }, []);

    return (
        <>
            <Row xs={1} lg={2}>
                <Col xs lg={8}>
                    <Row style={{ padding: '1rem' }}>
                        {cartProducts.length == 0 && (
                            <div className='alert alert-danger text-center'>
                                Todavía no has agregado productos a tu carrito de compras
                            </div>
                        )}
                    </Row>
                    <ShoppingCartGrid products={cartProducts} deliveryPrice={deliveryPrice} onUpdatePrice={onUpdatePrice} />
                </Col>
                <Col xs lg={4}>
                    <OrderSummaryCard productsPrice={productsPrice} deliveryPrice={deliveryPrice} showModal={setModalShow} />
                </Col>
            </Row>
            <Payment
                products={cartProducts}
                totalPrice={productsPrice + deliveryPrice}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default ShoppingCart;