import React from 'react';

import './App.css';

import {HeaderNav} from './Partials/HeaderNav'
import { Products } from './Views/Store/Products/index';
import { useState } from'react'

function App() {

const  [views, setViews] = useState(1)


     return (
 
  <div>

      <HeaderNav/>  {views === 1 ? <Products/> : <section>BUSCA </section>}

</div>
  );
}

export default App;
