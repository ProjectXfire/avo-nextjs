import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import db from '../database/db';
import styles from '@styles/HomePage.module.scss';
import Products from '@components/Products/Products';

const HomePage = () => {
  const products = useSelector(state => state.products);
  const database = new db();
  console.log(products);
  useEffect(() => {
  }, [])
  return (
    <section className={styles.HomePage}>
      <h1>Platzi Avo</h1>
      <div>
        <Products />
      </div>
    </section>
  );
};

export default HomePage;
