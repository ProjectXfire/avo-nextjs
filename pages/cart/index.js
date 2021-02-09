import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'semantic-ui-react';
import styles from '@styles/Cart.module.scss';

const Cart = () => {

  const cart = useSelector(state => state.cart);


  return (
    <section className={styles.Cart}>
      <h1>Detalle del carrito</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Producto</Table.HeaderCell>
            <Table.HeaderCell >Sku</Table.HeaderCell>
            <Table.HeaderCell >Precio</Table.HeaderCell>
            <Table.HeaderCell >Cantidad</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            cart.map(item => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.sku}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.qtty}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </section>
  )
};

export default Cart;
