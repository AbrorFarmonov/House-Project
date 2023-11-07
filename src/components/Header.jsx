import React from 'react'
import cart_icon from '../assets/shopping-cart.svg'

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="inner-header flex-align-center">
                    <div className="logo flex-align-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M17.5 0L19.9652 9.10444L26.9612 2.77806L24.1128 11.77L33.4186 10.2302L26.1609 16.2547L34.8219 19.9905L25.4593 21.1349L30.7256 28.9601L22.2306 24.861L22.4303 34.2911L17.5 26.25L12.5697 34.2911L12.7694 24.861L4.27438 28.9601L9.54072 21.1349L0.178125 19.9905L8.83906 16.2547L1.58144 10.2302L10.8872 11.77L8.03879 2.77806L15.0348 9.10444L17.5 0Z" fill="#598D66" />
                        </svg>
                        <h1>Ink. House</h1>
                    </div>
                    <div className="nav-and-btn flex-align-center">
                        <nav className='flex-align-center'>
                            <li><a href="#">Репродукции</a></li>
                            <li><a href="#">Новинки</a></li>
                            <li><a href="#">О нас</a></li>
                        </nav>
                        <button>
                            <img src={cart_icon} alt="icon-cart" />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}
