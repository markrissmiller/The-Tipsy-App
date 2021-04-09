import './App.css';
import {  Route, Link } from 'react-router-dom'
import Home from './Components/Home/Home'
import { useEffect, useState } from 'react';
import DrinkDetail from './Components/DrinkDetails/DrinkDetail'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'


export default function App () {
  
  const [homeData, setHomeData] = useState([]);

   const makeHomeAPICall = async () => {
      try{
          const res = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php');
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
      < Nav />
      <main>
        
          <Route path="/" exact render={() => <Home homeData={homeData}/> } />
          <Route path='/drink/:id' render={routerProps => {
          const drink = [...homeData].filter(
            (d) => d.idDrink === routerProps.match.params.id
          );
          return <DrinkDetail {...routerProps} drink={drink[0]}/>
        }}/>
          
        
      </main>
      <Footer/>
    </div>
      
    
  )
}
