import { Row, Col } from 'react-bootstrap';
import ShoppingCartCard from '../ShoppingCartCard/ShoppingCartCard';

const ShoppingCartGrid = ({products, onUpdatePrice}) => {
    console.log('cart products:', products);

    return (
        <Row xs lg = {1}>
            {products!= null && products.map((item) => (
                <Col>
                    <ShoppingCartCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        quantity={item.quantity}
                        colors={item.colors} 
                        onUpdatePrice={onUpdatePrice}/>
                </Col>
            ))}
        </Row>
    );
}

export default ShoppingCartGrid;