import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import styles from '@styles/Product.module.scss';
import { addToCart } from '../../Redux/actions/actionProducts';

const Products = (props) => {

  const { product } = props;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const addProductQtty = {
      ...product,
      qtty: 1
    }
    dispatch(addToCart(addProductQtty))
  };

  return (
    <Card className={styles.Product}>
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
            <Button inverted color='blue'>
              <Icon name='info circle'/>
            </Button>
          </a>
        </Link>
      </Card.Content>
    </Card>
  )
}

export default Products
