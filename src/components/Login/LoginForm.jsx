import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/admin');
    }

    return (
        <Form style={{padding: '5rem', width: '50%', margin: 'auto'}} onSubmit={onLogin}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Correo electrónico" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Button variant="dark" type="submit">
                Iniciar sesión
            </Button>
        </Form>
    );
}

export default LoginForm;