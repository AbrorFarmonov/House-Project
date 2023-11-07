import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        const franceCards = axios.get('http://localhost:3031/france-cards')
            .then(res => setData(res.data))
            .catch(err => console.log(err, err.data))
    }, [])

    return (
        <div className='products'>
            <div className="header-products flex-align-center">
                <div className="left-header">
                    <h1>Репродукции</h1>
                </div>
                <div className="right-header flex-align-center">
                    <button className='active'>Франция</button>
                    <button>Германия</button>
                    <button>Англия</button>
                </div>
            </div>
            <div className="card-container">
                <div className="france-cards">
                    {
                        data.map(item => {
                            const container =
                                <div className='card-item'>
                                    <div className="img-card">
                                        <img src={item.img} alt="img-of-cart" />
                                    </div>
                                    <div className="card-detail">
                                        <span>{item.author}</span>
                                        <h1>{item.name}</h1>
                                        <h2>{item.cordinates}</h2>
                                        <p>{item.cost}</p>
                                        <button>В корзину</button>
                                    </div>
                                </div>
                            return [container]
                        })
                    }
                </div>
            </div>
        </div>
    )
}
