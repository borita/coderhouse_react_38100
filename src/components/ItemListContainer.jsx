import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import mens_singles from "../mens_singles.PNG";
import mens_doubles from "../mens_doubles.PNG";
import female_singles from "../female_singles.PNG";
import female_doubles from "../female_doubles.PNG";
import mix_doubles from "../mix_doubles.PNG";
const ItemListContainer = ({ greeting }) => {
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
          <section className="Item-image">
            <ul>
              <li>
                {" "}
                <input type="checkbox"></input>{" "}
              </li>
              <li>
                <img className="main_image" src={mens_singles} />
              </li>
              <li>
                {" "}
                <input type="checkbox"></input>{" "}
              </li>
              <li>
                <img className="main_image" src={mens_doubles} />
              </li>
              <li>
                {" "}
                <input type="checkbox"></input>{" "}
              </li>
              <li>
                <img className="main_image" src={female_singles} />
              </li>
              <li>
                {" "}
                <input type="checkbox"></input>{" "}
              </li>
              <li>
                <img className="main_image" src={female_doubles} />
              </li>
              <li>
                {" "}
                <input type="checkbox"></input>{" "}
              </li>
              <li>
                <img className="main_image" src={mix_doubles} />
              </li>
            </ul>
          </section>
        </div>
      </form>
    </Container>
  );
};

export default ItemListContainer;
