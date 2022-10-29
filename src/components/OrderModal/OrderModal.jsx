import { Alert, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OrderModal.css";
//---------------------------------------------------

import {useState} from 'react'
import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { FaBlenderPhone } from "react-icons/fa";
//-------------------------------------------------/
const OrderModal = ({ showModal, onClose, onBuy, orderId,buyerMock}) => {
  // obtener los datos de la forma y pasarselo al objeto buyerMock
  const [buyer,setbuyer] = useState({
    name:'',
    email:'',
    phone:''
  });
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Finalizar Compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
               setbuyer= ({
                name: values.name,
                phone:values.phone,
                email: values.email,
                order_date:Date.now(),
              }) 
              buyerMock =[...buyer]
              alert("objeto copiado "+buyerMock)
            }}
          >
            <Form>
              <label htmlFor="name">First Name</label>
              <Field
                id="name"
                name="name"
                placeholder="aaaaaaaa"
                type="name"
                required
              />
              <br/>
              <label htmlFor="phone">phone</label>
              <Field
                id="phone"
                name="phone"
                placeholder="### ### ####"
                type="phone"
                required
              />
                <br/>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                required
              />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
      </Modal.Body>
      <Modal.Footer>
        {!orderId && (
          <>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={onBuy}>
              Buy
            </Button>
          </>
        )}
        {orderId && (
          <div className="footerOrderSuccess">
            <Alert key="success" variant="success">
              Numero de orden: {orderId}
            </Alert>
            <Link to="/CategoryId">
              <Button variant="success">Comprar nuevamente</Button>
            </Link>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};


export default OrderModal;
/*
 onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
               buyerMock = {
                name: values.name,
                phone:values.phone,
                email: values.email,
                order_date:Date.now(),
              }
            }}
*/