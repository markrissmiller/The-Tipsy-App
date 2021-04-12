
export default function Nav({handleChange, searchString, handleSubmit}){
    return(
        <nav className='nav-container'>
        <div >
            <div >
                
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Search"
                        type="text"
                        name="searchString"
                        required
                        onChange={handleChange}
                        value={searchString}/>
                    <button type='submit'>search</button> 
                </form>
            </div>
        </div>
      </nav>
    )
}