import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function UserForm({onAction}) {
    
    const [lgShow, setLgShow] = useState(true);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        if(name!=="" && phone!=="" && email!=="" && address!==""){
            setLgShow(false)
            const datos = {name, phone, email, address }
            
            return onAction(datos)

        }
        else{
            alert("Diligencie todos los datos")
        }

    }
  
    return (

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Registre sus datos para finalizar la compra
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(event)=>handleSubmit(event)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="number" placeholder="Phone" value={phone} onChange={(e)=> setPhone(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)} />
                </Form.Group>

                <Button className="mt-3" variant="primary" type="submit">Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>

    );
}

export default UserForm;