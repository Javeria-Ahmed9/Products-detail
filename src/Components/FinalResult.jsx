import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Add } from "../Store/CartSlice";

function FinalResult({ val }) {
  FinalResult.propTypes = {
    val: PropTypes.object.isRequired,
  };
  let dispatch = useDispatch();

  let handleCart = (val) => {
    dispatch(Add(val));
  };
  return (
    <div id="one" className="card  ">
      <img src={val.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          <b>Title:</b> {val.title}
        </h5>
        <h5 className="card-title">
          <b>Delivery time:</b> {val.shippingInformation}
        </h5>

        <h5 className="card-title">
          <b>Warranty: </b>
          {val.warrantyInformation}
        </h5>
        <h5 className="card-title">
          <b>Discount: </b>
          {val.discountPercentage}%
        </h5>
        <h5 className="card-title">
          <b>Price:</b> {val.price} $
        </h5>
        <h5 className="card-title">
          <p>{val.availabilityStatus}</p>
        </h5>
        <p className="mb-2 container text-center">
          {" "}
          <a onClick={() => handleCart(val)} className="btn btn-primary">
            Add to cart
          </a>
        </p>
      </div>
    </div>
  );
}

export default FinalResult;
