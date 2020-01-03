import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch , BrowserRouter } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import ShopData from "./pages/shop/shop.data";
import Header from './components/header/header.component'

const App = ()  =>{
  return (
    <div>
      <Header/>
			<Switch>
     <Route exact path='/' component={HomePage}/>
     <Route path='/shop' component={ShopPage}/>
		 </Switch>
		</div>
  );
}

export default App;
