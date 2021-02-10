import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Card, Icon, Image, Button, Message } from 'semantic-ui-react';
import styles from '@styles/Product.module.scss';
import { addToCart } from '../../Redux/actions/actionProducts';

const Products = (props) => {

  const { product } = props;
  const dispatch = useDispatch();
  const [message, setMessage] = useState(false);
  const cart = useSelector(state => state.cart);
  const alreadyAdded = cart.find(item => item.id === product.id);

  const handleAddToCart = (product) => {
    if (!alreadyAdded) {
      setMessage(true)
      const addProductQtty = {
        ...product,
        qtty: 1,
      };
      dispatch(addToCart(addProductQtty))
      setTimeout(() => setMessage(false), 1000);
    }
  };

  return (
    <Card className={styles.Product}>
      {
        message
          && (
            <Message
              className={styles.Product__message}
              success
              header='Product successful register'
            />
          )
      }
      <Image src={product.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>{product.price}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button inverted color='green' onClick={() => handleAddToCart(product)}>
          <Icon name='add circle'/>
        </Button>
        <Link href={`/product/${product.id}`}>
          <a>
            <Button type='button' inverted color='blue'>
              <Icon name='info circle'/>
            </Button>
          </a>
        </Link>
      </Card.Content>
    </Card>
  )
}

export default Products
