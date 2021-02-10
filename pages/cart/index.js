import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Icon } from 'semantic-ui-react';
import styles from '@styles/Cart.module.scss';
import { removeItemFromCart } from '../../Redux/actions/actionProducts';

const Cart = () => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const exist = cart.length > 0;

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  }

  return (
    <section className={styles.Cart}>
    {
      exist
      ? (
        <>
          <h1>Detalle del carrito</h1>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell >Producto</Table.HeaderCell>
                <Table.HeaderCell >Sku</Table.HeaderCell>
                <Table.HeaderCell >Precio</Table.HeaderCell>
                <Table.HeaderCell >Cantidad</Table.HeaderCell>
                <Table.HeaderCell >Acciones</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                cart.map(item => (
                  <Table.Row key={item.id}>
                    <Table.Cell>
                      <Link href={`/product/${item.id}`}>
                        <a >{item.name}</a>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{item.sku}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                    <Table.Cell>{item.qtty}</Table.Cell>
                    <Table.Cell collapsing>
                      <Button onClick={() => handleRemove(item.id)}>
                        <Icon name='trash alternate'></Icon>
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table>
        </>
      )
      : <h1>No tiene productos agregados</h1>
    }
    </section>
  )
};

export default Cart;
