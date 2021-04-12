import {Link} from 'react-router-dom'

function Home({homeData}) {
  console.log(homeData)
  return (
    <div className='gallery'>
      <div className='welcome'>
      <h1>Welcome To The Tipsy App!</h1>
      <p>search for a drink or try a random one below!</p>
      <p className='center'>Please Drink Responsibly</p>
      </div>
      <div >
        { homeData.map((drink, i)=> {
          return(
            <Link to={`/drink/${drink.idDrink}`} className='drink' key={i} >
                      <div className='drink-display'
                      style={{backgroundImage: `url(${drink.strDrinkThumb})`}}
                      >
                          <h2 className='drink-name' >{drink.strDrink}</h2>
                      </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
