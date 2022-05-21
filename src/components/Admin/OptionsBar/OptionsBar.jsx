import { InputGroup, FormControl, Button } from 'react-bootstrap';

const OptionsBar = ({showModalToCreate, setProductFilter}) => {
    return (
        <InputGroup className="mb-3" style={{ padding: '3rem' }}>
            <FormControl style={{ marginLeft: '10rem' }}
                placeholder="Nombre del producto"
                aria-label="Nombre del producto"
                onChange={(e) => setProductFilter(e.target.value)}
            />
            <Button variant="success" style={{ marginLeft: '10rem', marginRight: '10rem' }}
                onClick={() => showModalToCreate()}>Nuevo</Button>
        </InputGroup>
    );
}

export default OptionsBar;