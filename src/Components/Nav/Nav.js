import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <nav className='nav-container'>
        <div >
            <div >
                <Link key='Home' to="/" className='home-link'>Home</Link>
            </div>
            <form>
                <input type='text'/>
                <button>search</button>
            </form>
        </div>
      </nav>
    )
}