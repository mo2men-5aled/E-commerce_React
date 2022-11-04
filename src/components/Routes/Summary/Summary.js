import { useParams, Link } from "react-router-dom";
import Data from "../../../Data/db.json";
import Text from "../../Text";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Cart } from "react-bootstrap-icons";
import Cards from "../../Landing/CardsList";

const Summary = () => {
  const items = Data.items;
  const params = useParams();
  const item = items[params.id];
  const ProductPrice = item.price.replace("$", "");
  const Quantity = params.amount;

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="row pt-3">
        <Cart size={100} />
        <Text message="Your Cart" />
      </div>
      <div className="row">
        <div className="card p-3 col-md-8">
          <Table>
            <thead>
              <tr>
                <th>Num</th>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{item.name}</td>
                <td>{Quantity}</td>
                <td> {ProductPrice}</td>
              </tr>

              <tr></tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3>Summary</h3>
            </div>
            <div className="card-body">
              <Table>
                <tbody>
                  <tr>
                    <td>items</td>
                    <td>{Quantity}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{item.price}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>{ProductPrice * Quantity} $</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Button
          as={Link}
          to={`/checkout`}
          variant="dark"
          type="submit"
          className="mt-3"
        >
          Checkout...?
        </Button>
      </div>
      <Text message="Latest Products" />
      <Cards />
    </div>
  );
};

export default Summary;
