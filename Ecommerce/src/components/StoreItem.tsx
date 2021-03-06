import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utils/formatCurrency';

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    url: string
}

const StoreItem = ({ id, name, price, url }: StoreItemProps) => {
    let quantity = 0;
  return (
    <Card>
        <Card.Img 
            variant = "top"
            src = {url}
            height = "200px"
            style = {{objectFit: "cover"}}/>

        <Card.Body className='d-flex flex-column'>
            <Card.Title className = "d-flex justify-content-between align-items-baseline mb-4">
                <span className = "fs-2">{name}</span>
                <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
            </Card.Title>
            <div className ="mt-auto">
                {
                    quantity === 0 ? (
                        <Button className ="w-100">+ Add to Cart</Button>
                    ) : null
                }
            </div>
        </Card.Body>
      
    </Card>
  )
}

export default StoreItem
