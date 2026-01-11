import React, { Suspense } from 'react';
import NavBar from './components/NavBar/NavBar';
import Countries from './components/Countries/Countries';
const countriesPromise = fetch('https://disease.sh/v3/covid-19/countries')
.then(res=>res.json())
const App = () => {
  return (
    <div className='container mx-auto'>
      <NavBar></NavBar>
      <Suspense 
      fallback={<span className="loading loading-bars loading-xl"></span>}>
           <Countries countriesPromise={countriesPromise} ></Countries>
      </Suspense>
    </div>
  );
};

export default App;