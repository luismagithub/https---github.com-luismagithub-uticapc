import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import emailjs from '@emailjs/browser';

import { db } from '../../firebase/firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckChange = (e) => {
    setIsChecked(!e.target.checked);
  };
  
  const valorInicial = {
    email: ''
  }

  const [email, setEmail] = useState(valorInicial);

  const capturarInput = (e) => {
    const {name, value} = e.target;
    setEmail({...email, [name]:value});
  };

  const enviarEmail = async(e) => {
    e.preventDefault();

    try {
      if(isChecked === false) {
        await addDoc(collection(db,'emails'), {
          ...email
        });
      }
    } catch(error) {
      console.log(error);
    }
    setEmail({...valorInicial});

    emailjs.sendForm('','',e.target, '').then(res=> {
      alert("Se ha enviado correctamente");
    })
  }

  

  return (
    <Container>
      <h3>Formulario de contacto</h3>
      <Form onSubmit={enviarEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={capturarInput} value={email.email} placeholder="Introduce tu email de contacto" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Escribe aquí</Form.Label>
          <Form.Control as="textarea" name="mensaje" placeholder="Cuéntanos tu duda"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" checked={!isChecked} onChange={handleCheckChange} label="Autorizo envío de información y promociones" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form> 
    </Container>
  );
};

export default ContactForm;