import './App.css';
import {  Route, Link } from 'react-router-dom'
import Home from './Components/Home/Home'
import { useEffect, useState } from 'react';
import DrinkDetail from './Components/DrinkDetails/DrinkDetail'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'


export default function App () {
  const [searchString, setSearchString] = useState('');
  
  const [homeData, setHomeData] = useState([]);
  
  function handleChange(event) {
    setSearchString(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    searchAPICall(searchString);
  }

  const searchAPICall = async () => {
    try{
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchString}`);
      const data = await res.json();
      if(data.drinks === null){ 
        setHomeData([])
        setSearchString('')
      } else{
        setHomeData(data.drinks)
        setSearchString('')
      }
    } catch(err){
      console.log(err)
    }
  }

  

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
      <Link to='/' key='Home' className='home-link'><div className='header' >The Tipsy App</div></Link>
      < Nav 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
          setHomeData={setHomeData}/>
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
