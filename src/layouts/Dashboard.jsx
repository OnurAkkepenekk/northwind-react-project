import React from "react";
import Navi from "./Navi";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import  {ToastContainer} from "react-toastify"
import productAdd from "../pages/productAdd";
export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList}></Route>
            <Route exact path="/products" component={ProductList}></Route>
            <Route path="/products/:name" component={ProductDetail}></Route>
            <Route path="/cart" component={CartDetail}></Route>
            <Route path="/product/add" component={productAdd}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
