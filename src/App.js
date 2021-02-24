import './App.css';
import {Route, Switch} from 'react-router-dom'
import React from "react";

// components
import  Navbar  from "./components/Navbar";
import Form from './components/Form'
import Home from './components/Home'
import styled from 'styled-components';

const Div =styled.div`
background-image: url("http://www.restaurantnews.com/wp-content/uploads/2021/02/Celebrate-Game-Day-with-Dominos.jpg");
position: fixed; 
  top: 0; 
  left: 0; 
	
  min-width: 100%;
  min-height: 100%;`;

const App = () => {
  return (
    <Div>
      <Navbar />

      <Switch>
        <Route path='/pizza'>
            <Form />
        </Route>
        
        <Route exact path='/'>
            <Home />
        </Route>
      </Switch>
    </Div>
  );
};
export default App;
