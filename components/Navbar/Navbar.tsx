import React from 'react';
import Link from 'next/link';
import styles from '@styles/Navbar.module.scss';
import { Icon, Divider } from 'semantic-ui-react';

export default function Navbar() {
  return (
    <nav>
      <menu className={styles.Navbar}>
        <Link href="/">
          <a>Avo Store</a>
        </Link>
        <Link href="/cart">
            <a><Icon name='shopping cart' color='blue'/>Canasta 0</a>
        </Link>
      </menu>
      <Divider />
    </nav>
  )
}
