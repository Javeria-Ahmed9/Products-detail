import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, Unshow } from "../Store/productdataSlice";
import { NavLink, Outlet } from "react-router-dom";

function SearchBar() {
  let dispatch = useDispatch();

  const [val, setVal] = useState("");
  const [dat, setData] = useState([]);

  useEffect(() => {
    let fetchdata = async () => {
      await fetch(`https://dummyjson.com/products/search?q=${val}`).then(
        (res) => res.json().then((response) => setData(response.products))
      );
    };
    fetchdata();
  }, [val]);

  let handleInput = (event) => {
    let valueIs = event.target.value;
    setVal(valueIs.toLowerCase());
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    if (val.trim() !== "") {
      dispatch(fetchdata(val));
      dispatch(Unshow());
    }
  };
  let handleOpt = (opt) => {
    setVal(opt);
    dispatch(fetchdata(opt));
    dispatch(Unshow());
  };

  let handleClick = () => {
    if (val.trim() !== "") {
      dispatch(fetchdata(val));
      dispatch(Unshow());
    }
  };

  let arr = useSelector((state) => state.cartData);

  let highlight = ({ isActive }) => {
    return {
      color: isActive ? "white" : "",
      textDecoration: isActive ? "" : "",
    };
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <b>ShoppingCart</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={highlight}
                  to={"/"}
                  className="nav-NavLink active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"cart"} className="nav-NavLink" style={highlight}>
                  Cart
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  style={{ textDecoration: "none" }}
                  className="nav-NavLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cart items: {arr !== "" ? arr.length : "0"}
                </a>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="d-flex" role="search">
              <input
                value={val}
                placeholder="search product"
                onChange={handleInput}
                className="form-control me-2"
                type="search"
                aria-label="Search"
              />
              <button
                onClick={handleClick}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div id="searchopt">
        <div className="dropdown-content">
          {val &&
            dat
              .filter((vl) => vl.title.toLowerCase().startsWith(val))
              .map((v, ind) => (
                <div
                  className="border"
                  id="clickopt"
                  onClick={() => handleOpt(v.title)}
                  key={ind}
                >
                  {v.title}
                </div>
              ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default SearchBar;
