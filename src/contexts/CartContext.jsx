import { createContext, useState } from "react";

const CartContext = createContext({});

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    if (!isInCart(product.id)) {
      const item = {
        ...product,
        quantity
      };
      setCart([...cart, item]);
    } else {
      // actualizar quantity
      // buscamos el item en el carrito, en el array, su ubicacion para despues poder actualizar este item
      const itemIndex = cart.findIndex((item) => item.id === parseInt(product.id));
      // creamos un borrador del item para poder modificarlo y evidar la modificacion del estado de react
      const itemDraft = { ...cart[itemIndex] };
      // actualizamos la quantity en el borrador
      itemDraft.quantity = itemDraft.quantity + quantity;
      // creamos un borrador del carrito para poder actualizar el item
      const cartDraft = [...cart];
      // actualizamos el carrito borrador, SIN TOCAR EL ESTADO REACT
      cartDraft[itemIndex] = itemDraft;
      // cart[itemIndex] = itemDraft; PROHIBIDO, ya que modifica el estado de react
      setCart(cartDraft);
    }
  }

  const removeItem = (itemId) => {
    const cartDraft = cart.filter((item) => item.id !== itemId);
    setCart(cartDraft);
  }
  // checar para limpiar carrito
  const clear = (e) => {
    setCart([]);
  }
  // manejar estado de objeto del comprador 
  //const [buyerMock, setbuyerMock] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === parseInt(id));

  const total = cart.reduce((count, item) => count + (item.price * item.quantity), 0);


  const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, total, totalQuantity }}>
      {children}
    </CartContext.Provider>
  )
};
const buyer ={
  name: 'Magadan Academy',
  phone: '0019564570550',
  email: 'magadan@gmail.com',
  order_date:Date.now()
}