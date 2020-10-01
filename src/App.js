import React from 'react';
import Random from './components/random/Random';
import Footer from './components/footer/Footer';
import './app.scss';

const App = _ => {  
  	return (
		<div className="app">
			<Random />
			<Footer />
		</div>
	)
};

export default App;