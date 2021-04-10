import {Link} from 'react-router-dom'

export default function Nav({handleChange, searchString, handleSubmit}){
    return(
        <nav className='nav-container'>
        <div >
            <div >
                <Link key='Home' to="/" className='home-link'>Home</Link>
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