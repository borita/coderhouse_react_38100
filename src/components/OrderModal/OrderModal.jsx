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
import {useContext} from "react"
//import {CartContext} from '../../contexts/CartContext'
import CartContext from "../../contexts/CartContext";
const OrderModal = ({ showModal, onClose, onBuy, orderId}) => {
 //----

 let {buyer,setBuyer} = useContext(CartContext)

//----
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
              order_date:Date.now()
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
             /*
             let buyer = {
                ...values
              };
              */
              setBuyer(values)
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
              Order Number: {orderId}
            </Alert>
            <Link to="/CategoryId">
              <Button variant="success">Buy Again</Button>
            </Link>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};


export default OrderModal;
