import { Provider } from "react-redux";
import SearchBar from "./Components/SearchBar";
import store from "./Store/store";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "./Components/Cart";
import AllResult from "./Components/AllResult";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
            </>
          }
        >
          <Route
            path="/"
            element={
              <>
                <AllResult />
              </>
            }
          ></Route>
          <Route path="cart" element={<Cart />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <Provider store={store}>
        {/* <SearchBar />
        <AllResult /> */}
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
