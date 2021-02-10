import React from 'react';
import Link from 'next/link';
import { Divider } from 'semantic-ui-react';
import styles from '@styles/Footer.module.scss';

const Footer = () => {
  return (
    <>
      < Divider/>
      <footer className={styles.Footer}>
        <div>
          <p>Nosotros</p>
          <Link href='/about'>
            <a>Acerca de nosotros</a>
          </Link>
        </div>
        <div>
          <p>Servicios</p>
        </div>
        <div>
          <p>Hecho para</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
