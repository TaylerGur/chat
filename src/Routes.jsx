import React, { Component } from 'react';
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import Chat from './containers/Chat';
import Main from './containers/Main';


export const Routes = 
	(
		<Router >
		  
			      <Switch>
			        <Route path="/chat" component={Chat}/>
			      	<Route path="/" component={Main}/>
			        

			      </Switch>
			 

  			</Router>
);