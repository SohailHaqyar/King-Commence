import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch , BrowserRouter } from 'react-router-dom'

const HatsPage = () => {
	return(
	<div>
		<h1>Hats Page</h1>
	</div>
	)
}


const App = ()  =>{
  return (
    <div>
			<Switch>
     <Route exact path='/' component={HomePage}/>
     <Route path='/hats' component={HatsPage}/>
		 </Switch>
		</div>
  );
}

export default App;
