import React from 'react';
import ReactDOM from 'react-dom';

import {Route, BrowserRouter} from 'react-router-dom'

import App from './App'
import ItemAdd from './noviProizvod'
import ItemsPreview from './sviProizvodi'

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={App} />

    <Route exact path='/admin/proizvodi' component={ItemsPreview} />
    
    <Route exact path='/admin/unos-novog-proizvoda' component={ItemAdd} />
  </BrowserRouter>,
  
  document.getElementById('root')
)