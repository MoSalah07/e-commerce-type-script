import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import dummyItems from '../data/items.json';
import { Button, Stack } from 'react-bootstrap';
import formatCurrency from '../utilities/fromatCurrency';

type CartItemsProps = {
    id: number;
    quantity: number;
}

function CartItem({id, quantity}: CartItemsProps) {
    const { removeFromCart } = useShoppingCart();
    const item = dummyItems.find(item => item.id === id);
    if (item == null) return null
    
  return (
      <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img src={item.imgUrl} style={{ width: '200px', height: '75px', objectFit: 'cover' }} />
      <div className='me-auto'>
        <div>
          {item.name} {quantity > 1 && (
            <span className='text-muted' style={{fontSize: '.65rem'}}>x{quantity}</span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '.75rem' }}>
          {formatCurrency(item.price * quantity)}
        </div>
        <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>&#x2715;</Button>
      </div>
    </Stack>
  )
}

export default CartItem