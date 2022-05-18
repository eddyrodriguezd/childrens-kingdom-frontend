import { InputGroup, FormControl, Button } from 'react-bootstrap';

const OptionsBar = () => {
    return (
        <InputGroup className="mb-3" style={{padding: '3rem'}}>
            <FormControl style={{marginLeft: '10rem'}}
                placeholder="Nombre del producto"
                aria-label="Nombre del producto"
            />
            <Button variant="success" style={{marginLeft: '10rem', marginRight: '10rem'}}/*onClick={saveProduct}*/>Nuevo</Button>
        </InputGroup>
    );
}

export default OptionsBar;