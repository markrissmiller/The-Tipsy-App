import './App.css';
import {  Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import { useEffect, useState } from 'react';
import DrinkDetail from './Components/DrinkDetail'



export default function App () {
  
  const [homeData, setHomeData] = useState([]);

   const makeHomeAPICall = async () => {
      try{
          const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
          const data = await res.json();
          setHomeData(data.drinks)
      } catch(err){
          console.log(err)
      }

   }
   console.log(homeData)

   useEffect(()=>{
     makeHomeAPICall();
   },[])

  return (
    <div className='app'>
      <nav className='nav-container'>
        <Link key='Home' to="/" className='home-link'>Home</Link>
      </nav>
      <main>
        
          <Route path="/" exact render={() => <Home homeData={homeData}/> } />
          <Route path='/drink/:id' render={routerProps => {
          const drink = [...homeData].filter(
            (d) => d.idDrink === routerProps.match.params.id
          );
          return <DrinkDetail {...routerProps} drink={drink[0]}/>
        }}/>
          
        
      </main>
      <footer className='footer-container'> 

      </footer>
    </div>
      
    
  )
}
