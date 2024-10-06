import { useSelector } from "react-redux";
import FinalResult from "./FinalResult";
import { STATUS } from "../Store/productdataSlice";
import { MagnifyingGlass, RotatingTriangles } from "react-loader-spinner";

function AllResult() {
  let { arrrayofdata, status, show } = useSelector(
    (state) => state.productsAre
  );
  if (status == STATUS.PENDING) {
    return (
      <h1 id="icon" className="container text-center">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </h1>
    );
  } else if (status == STATUS.IDLE) {
    return (
      <div className="container d-flex flex-wrap gap-3 justify-content-between ">
        {arrrayofdata.length > 0 ? (
          arrrayofdata.map((val, ind) => <FinalResult key={ind} val={val} />)
        ) : show == true ? (
          <h1 id="three" className="container text-center">
            {" "}
            <RotatingTriangles
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="rotating-triangles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <p>Welcome to ShoppingCart</p>{" "}
          </h1>
        ) : (
          <h1 className="container text-center">Result not found !</h1>
        )}
      </div>
    );
  } else return <h2>Something went wrong</h2>;
}

export default AllResult;
