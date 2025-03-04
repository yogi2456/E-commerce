import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="https://th.bing.com/th/id/OIP.IOe7MAzj_i96H8E7zbEhMAHaD6?rs=1&pid=ImgDetMain" className="card-img" alt="background" height="420px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                    <p className="card-text fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home
