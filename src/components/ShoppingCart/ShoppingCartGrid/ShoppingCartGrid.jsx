import { Row, Col } from 'react-bootstrap';
import ShoppingCartCard from '../ShoppingCartCard/ShoppingCartCard';

const ShoppingCartGrid = (products) => {

    const {loading, data} = products.products;

    return (
        <Row xs={1} md={1}>
            {data!= null && data.map((item) => (
                <Col>
                    <ShoppingCartCard
                        key={item.id}
                        title={item.title}
                        image={item.url}
                        description={item.description}
                        price={item.price}
                        colors={item.colors} />
                </Col>
            ))}
        </Row>
    );
}

export default ShoppingCartGrid;