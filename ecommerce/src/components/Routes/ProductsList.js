import { Link } from "react-router-dom";
import Data from "../../Data/db.json";
import Text from "../Text";
const ProductList = () => {
  const items = Data.items;

  return (
    <div className="container">
      <Text message="Our Products" />
      {items.map((item) => {
        return (
          <div className="card" style={{ marginBottom: "15px" }}>
            <div className="row ">
              <div className="col-md-2 col-sm-4">
                <img
                  src={item.image}
                  className="rounded-start"
                  alt="..."
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="col">
                <div className="card-body">
                  <Link to={`/SingleProduct/${item.id}`}>
                    <h5 className="card-title">{item.name}</h5>
                  </Link>

                  {item.description}

                  <p className="card-text">
                    <small className="text-muted">{item.price}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
