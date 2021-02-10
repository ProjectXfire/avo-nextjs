import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from '@styles/HomePage.module.scss';
import { Loader } from 'semantic-ui-react';
import Products from '@components/Products/Products';
import { setProducts } from '../Redux/actions/actionProducts';

export const getStaticProps = async () => {
  const {data: {data}} = await axios.get('https://avo-nextjs.vercel.app/api/avo');
  return {
    props: {
      getProducts: data
    }
  };
};

const HomePage = ({ getProducts }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const showProducts = products.length > 0;
  useEffect(() => {
    dispatch(setProducts(getProducts));
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
