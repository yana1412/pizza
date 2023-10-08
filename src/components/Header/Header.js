import { Link } from 'react-router-dom'
import './header.scss'
import Search from '../Search/Search'


function Header () {
    return (
        <header className="header">
            <div className="container">
                <Link to='/' >
                    <div className="logo">
                        <img src="../images/logo.svg" alt="logo" />
                        <div>
                            <h1>REACT PIZZA</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <Search/>
                <Link to= '/cart'>
                    <div className="headerCartWrapper">
                        <a className="headerPrice" href="#">
                            520 ₽</a>
                        <div className='delimiter'></div>
                        <a className="headerCart" href="#">
                            <img src="../images/cart.svg" alt="cart" />
                            <span>3</span>
                        </a>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header