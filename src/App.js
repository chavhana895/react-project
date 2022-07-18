import React, { Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from 'styled-components'
import { connect } from "react-redux";
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Products = React.lazy(() => import('./components/Products/Products'));
const Cart = React.lazy(() => import('./components/Cart/Cart'));
const SingleItem = React.lazy(() => import('./components/SingleItem/SingleItem'));
const index = React.lazy(() => import('./EmployeeForm/index'));
const EmpList = React.lazy(() => import('./EmployeeForm/EmpList'));
const Todo = React.lazy(() => import('./todo/components/Todo'));

const Demo = styled.div`
 width: 100%;
`

function App({ current }) {
  return (
    <Suspense fallback={<p>Loading...</p>} >
    <Router>
      <Demo>
       
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/form" component={index}/>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/formList" component={<EmpList/>} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
       
      </Demo>
    </Router>
     </Suspense>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
