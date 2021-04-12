export default function DrinkDetail({drink}){
    if(!drink) return <h1>Loading...</h1>
    
    let ingredientArray = []
    
    for(let i = 1; i < 15; i++){
        if( drink[`strIngredient${i}`] !== '' && drink[`strIngredient${i}`] !== null){
            ingredientArray.push(drink[`strIngredient${i}`])
        }
    }
    let measurementArray = []
    
    for(let i = 1; i < 15; i++){
        if( drink[`strMeasure${i}`] !== '' && drink[`strMeasure${i}`] !== null){
            measurementArray.push(drink[`strMeasure${i}`])
        }
    }
    let ingredientList = []
    for(let i = 0; i< ingredientArray.length; i++){
        ingredientList.push(<li>{measurementArray[i]} {ingredientArray[i]}</li>)

    }
    return(
        <div className='drink-detail'> 
            <div className='drink-display' style={{backgroundImage: `url(${drink.strDrinkThumb})`}}></div>
            <h1>{drink.strDrink}</h1>
            <p>Glass type: {drink.strGlass}</p>
            <h2>Ingredients</h2>
                <ul>
                    {ingredientList}
                </ul>
            <h2>Directions</h2>
                <p>{drink.strInstructions}</p>
        </div>
        )
}