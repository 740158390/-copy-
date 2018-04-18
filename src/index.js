import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/common.css'

import registerServiceWorker from './registerServiceWorker';


import { HashRouter, Route, Link } from "react-router-dom";

import { createStore } from 'redux'
import { Provider } from 'react-redux'

 //仓库
import  Home  from './components/home.jsx'
import  News  from  './components/news.jsx'
import Header from "./components/header.jsx"
import Gameguide from './components/gameguide.jsx'
ReactDOM.render(
	<HashRouter>
			<div>
		<div id="wraper" data-nav="1" className="homepage">
		    <Header />
   	 <Route  path="/home" component={Home} name="1" />
   	 <Route path="/news" component={News} />
   	  <Route path="/gameguide" component={Gameguide} />
   	 </div> 
   	 
   	 </div>
   	 
			</HashRouter>, document.getElementById('root'));
registerServiceWorker();