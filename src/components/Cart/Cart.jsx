import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import './Cart.css';
import { Link } from "react-router-dom";
import { createOrder } from "../../utils/orders";
import OrderModal from "../OrderModal/OrderModal";
// en el onBuy poner este objeto desde el contextoy Modal



//-----------------------ojo esto funciona hard code --------------------------------

 const buyerMock = {
     //name: 'Luan_Alexander_Tennis_Academy',
     name: 'Luan Alexander Tennis Academy',
     phone: '0019564570550',
     email: 'l.alexandertennis@gmail.com',
     order_date:Date.now()
}


const Cart = () => {
  const { cart, total, removeItem, clear,buyer } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  // manejar estado de objeto del comprador 
  
  const handleRemove = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    // aqui buyerMock debe traer setiados los valores del modal
  
    const newOrder = {
      buyer: buyer,
      items: cart,
      total
    };

    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
  }

  const showTable = cart.length > 0

  return (
    <Container className='cartContainer'>
      <h1>Shopping Cart</h1>
      {showTable && (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><FaTrashAlt onClick={() => handleRemove(item.id)}/></td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <h3>Total: $ {total}</h3>
          <Button variant="success" onClick={handleOpen}>Check Out</Button>
           <span>  </span>
          <Button variant="success" onClick={clear}>Clean Shopping Cart</Button>
          
        </>
      )}
      {!showTable && (
        <>
          <h3>Shopping Cart is Empy</h3>
          <Link to='/CategoryId'>
            <Button variant="success">Go to Products</Button>
          </Link>
        </>
      )}
      <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      />
    </Container>
  );
}
 
export default Cart;





