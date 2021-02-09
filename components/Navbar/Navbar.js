import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Icon, Divider } from 'semantic-ui-react';
import styles from '@styles/Navbar.module.scss';


export default function Navbar() {

  const cart = useSelector(state => state.cart)

  return (
    <nav>
      <menu className={styles.Navbar}>
        <Link href="/">
          <a>Avo Store</a>
        </Link>
        <Link href="/cart">
            <a><Icon name='shopping cart' color='blue'/>Canasta ({cart.length})</a>
        </Link>
      </menu>
      <Divider />
    </nav>
  )
}
