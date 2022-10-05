import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { getAllProducts, getProducts, getProductsByCategory } from '../../utils/products'
import { getAllProducts, getProduct, getProductsByCategory } from '../../utils/products'
import ItemList from './ItemList';
import RegisterTournaments from "../../components/RegisterTournaments";
import mens_singles from "../../assets/mens_singles.PNG";
import mens_doubles from "../../assets/mens_doubles.PNG";
import female_singles from "../../assets/female_singles.PNG";
import female_doubles from "../../assets/female_doubles.PNG";
import mix_doubles from "../../assets/mix_doubles.PNG";
const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    } else {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    }
  }, [categoryId])
  return (
    <Container className="greeting">
      <h3>{greeting}</h3>
      <h4> Events Registration</h4>
      <div class="row">&nbsp;</div>
      <form>
        <div class="container fluid">
          <div class="row .d-flex justify-content-evenly">
            <div class="form-check col-1"></div>
            <div class="form-check col-3">
              <input
                class="form-check-input"
                type="radio"
                name="category"
                id="freshman"
              />
              <label class="form-check-label" for="freshman">
                Freshman
              </label>
            </div>

            <div class="form-check class=form-check col-3 padding 1px">
              <input
                class="form-check-input"
                type="radio"
                name="category"
                id="Junior Varsity"
              />
              <label class="form-check-label" for="varsity">
                {" "}
                Junior Varsity{" "}
              </label>
            </div>
            <div class="form-check class=form-check col-3 padding 1px">
              <input
                class="form-check-input"
                type="radio"
                name="category"
                id="varsity"
              />
              <label class="form-check-label" for="varsity">
                {" "}
                Varsity{" "}
              </label>
            </div>
          </div>
          <div class="row">&nbsp;</div>
          <div>&nbsp;</div>
          <ItemList products={products} />   
          
        </div>
      </form>
      <div className="wrap-components">
        <main>
          <section>
            <div class="header__titulo"> </div>
            <div class="container margin-left:100px">
            <RegisterTournaments /> 
            </div>
          </section>
          <section></section>
        </main>
      </div>
    </Container>
  );
};

export default ItemListContainer;
