import React, {useEffect, useState, } from 'react'
import { Button } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const handleSubtract = () => {
    setCount(count - 1)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleClick = () => onAdd(count);

  useEffect(() => {
      setCount(parseInt(initial));
  },[initial])

  return (
    <div className='itemCountContainer'>
        <div>
          <Button variant="danger" disabled={count <= 1} onClick={handleSubtract}>
            -
          </Button>
          <span>  </span>
          <h5>{count}</h5>
          <span>  </span>
          <Button variant="success" disabled={count >= stock} onClick={handleAdd}>
            +
          </Button>
        </div>
      <div>
      <Button variant="primary" disabled={stock <= 0} onClick={handleClick}>
        Add to Shopping Cart
      </Button>
      </div>
    </div>
  )
}

export default ItemCount