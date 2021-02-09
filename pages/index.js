import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from '@styles/HomePage.module.scss';
import { Loader } from 'semantic-ui-react';
import Products from '@components/Products/Products';
import { setProducts } from '../Redux/actions/actionProducts';

const HomePage = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const showProducts = products.length > 0;

  const fetch = async () => {
    const { data: { data} } = await axios.get('/api/avo');
    dispatch(setProducts(data));
  };

  useEffect(() => {
    fetch();
  }, [])
  return (
    <section className={styles.HomePage}>
      <h1>Platzi Avo</h1>
      <div className={styles.HomePage__products}>
        {
          showProducts ?
          products.map((product) => (
            <Products key={product.id} product={product}/>
          )) :
          <Loader active inline='centered' />
        }
      </div>
    </section>
  );
};

export default HomePage;
