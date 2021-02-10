import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Button, Input, Table } from 'semantic-ui-react';
import styles from '@styles/ProductDetail.module.scss';
import { addTocartOrUpdateQtty } from '../../Redux/actions/actionProducts';

export const getStaticPaths = async () => {
  const {data: {data}} = await axios.get('https://avo-nextjs.vercel.app/api/avo');

  const paths = data.map((avo) => {
    return {
      params: {
        id: avo.id
      }
    };
  });

  return {
    paths,
    fallback: false // Incremental static generation, significa que cualquier path que no este
  }                 // en la lista de patchs, mandara un error 404.
}

export const getStaticProps = async ({ params }) => {
  const {data} = await axios.get(`https://avo-nextjs.vercel.app/api/avo/${params.id}`);
  return {
    props: {
      product: data
    }
  };
};

const ProductPage = ({ product }) => {
  const { query: {id} } = useRouter();
  const cart = useSelector(state => state.cart);
  const [qtty, setQtty] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleQttyChange = (e) => {
    setQtty(e.target.value);
  }

  const handleQtty = (product) => {
    setLoading(true);
    const addProductQtty = {
      ...product,
      qtty,
    }
    dispatch(addTocartOrUpdateQtty(addProductQtty));
    setTimeout(() => {
      setLoading(false);
    }, 250);
  };

  useEffect(() => {
    const productCart = cart.find(product => product.id === id );
    if (productCart) {
      setQtty(productCart.qtty)
    }
  }, []);

  return (
    <section>
      {
        product && (
          <>
            <div className={styles.ProductDetail}>
              <div>
                <img src={product.image} alt={product.name}/>
              </div>
              <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p className={styles.ProductDetail__sku}>SKU: {product.sku}</p>
                <div>
                  {
                    loading
                    ? <Button loading color='green'>Add to cart</Button>
                    : <Button
                        color='green'
                        content='Add to cart'
                        onClick={() => handleQtty(product)}
                      />
                  }
                  <Input
                    name='qtty'
                    type='number'
                    value={qtty}
                    onChange={handleQttyChange}
                    min='1'
                  />
                </div>
              </div>
            </div>
            <div className={styles.ProductAttributes}>
              <h2>About this {product.name}</h2>
              <p>{product.attributes.description}</p>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Shape:</Table.Cell>
                    <Table.Cell>{product.attributes.shape}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Hardiness:</Table.Cell>
                    <Table.Cell>{product.attributes.hardiness}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Taste:</Table.Cell>
                    <Table.Cell>{product.attributes.taste}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </>
        )
      }
    </section>
  )
}

export default ProductPage
