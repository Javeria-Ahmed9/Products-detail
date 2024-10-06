import { useDispatch, useSelector } from "react-redux";
import { Remove } from "../Store/CartSlice";

function Cart() {
  let dispatch = useDispatch();
  let addedData = useSelector((state) => state.cartData);
  let removeItem = (ind) => {
    dispatch(Remove(ind));
  };
  return (
    <>
      <div className="container d-flex flex-wrap gap-3 justify-content-between ">
        {addedData.length > 0 ? (
          addedData.map((val, ind) => (
            <div key={ind} id="one" className="card bg-primary-subtle ">
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
                <p className="container mb-2 text-center">
                  {" "}
                  <a
                    onClick={() => removeItem(ind)}
                    className="btn btn-primary"
                  >
                    Remove
                  </a>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="container text-center">
            <h5>Cart is empty</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
