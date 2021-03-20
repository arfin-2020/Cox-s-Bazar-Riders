import React from 'react';
import Book from '../Book/Book';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css'


const Home = () => {
    const style = {
        display: 'flex',
        justifyContent: 'space-between', 
        
    }
    const vahicles = [
        {
            type: "Bike",
            id: 1,
            imgUrl: 'https://i.ibb.co/Nng4BHR/617-OW8-TPOWL-SX355.jpg'
        },
        {
            type: "Car",
            id: 2,
            imgUrl: 'https://i.ibb.co/dKz27Y8/Maruti-Suzuki-Alto-K10-Right-Front-Three-Quarter-48397-ol.jpg'
        },
        {
            type: "Bus",
            id: 3,
            imgUrl: 'https://i.ibb.co/qgDddLt/bus-216473-8403-lg.jpg'
        },
        {
            type: "Train",
            id: 4,
            imgUrl: 'https://i.ibb.co/Pt2ctyv/unnamed.jpg'
        }

    ]
    return (
        <div style={style} className="header">
           
            {
                vahicles.map(vahicle=><Vehicle vahicle={vahicle} key = {vahicle.id}></Vehicle>)
            }
            
         
        </div>
    );
};

export default Home;