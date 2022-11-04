import { useParams } from "react-router-dom";
import Data from "../../Data/db.json";

import Tabbs from "../SingleProduct/tabs";

import Text from "../Text";
const ViewProduct = () => {
  const items = Data.items;
  const params = useParams();
  const item = items[params.id];

  return (
    <div className="container">
      <Text message={item.name} />
      <div className="card" style={{ width: "100%" }}>
        <div className="row ">
          <div className="col-md-4">
            <img
              style={{ width: "100%", height: "100%" }}
              src={item.image}
              className="rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "50px" }}>
                {item.name}
              </h5>
              <p className="card-text" style={{ fontSize: "40px" }}>
                {item.description}
              </p>
              <p className="card-text">
                <small className="text-muted" style={{ fontSize: "30px" }}>
                  {item.price}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Text message="About this Product" />
      <Tabbs />
    </div>
  );
};

export default ViewProduct;
