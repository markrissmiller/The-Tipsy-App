import {Link} from 'react-router-dom'

function Home({homeData}) {
  console.log(homeData)
  return (
    <div>
      { homeData.map((drink, i)=> {
        return(
          <Link to={`/drink/${drink.idDrink}` } >
                    <div className='drink-display'
                     style={{backgroundImage: `url(${drink.strDrinkThumb})`}}
                     >
                        <h2 className='drink-name' >{drink.strDrink}</h2>
                    </div>
          </Link>
        )
      })}
    </div>
  );
}

export default Home;
