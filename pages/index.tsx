import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from '@styles/HomePage.module.scss';
import { SET_PRODUCTS } from '../Redux/types/typeProducts';
import Products from '@components/Products/Products';

const HomePage = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const fetch = async () => {
    const { data } = await axios.get('/api/avo');
    dispatch({
      type: SET_PRODUCTS,
      payload: data
    });
  }

  useEffect(() => {
    fetch();
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
