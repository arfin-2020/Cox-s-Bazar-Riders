import React from 'react';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css'


const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const vahicles = [
        {
            title: "Bike",
            id: 1,
            imgUrl: 'https://i.ibb.co/Nng4BHR/617-OW8-TPOWL-SX355.jpg'
        },
        {
            title: "Car",
            id: 2,
            imgUrl: 'https://i.ibb.co/dKz27Y8/Maruti-Suzuki-Alto-K10-Right-Front-Three-Quarter-48397-ol.jpg'
        },
        {
            title: "Bus",
            id: 3,
            imgUrl: 'https://i.ibb.co/qgDddLt/bus-216473-8403-lg.jpg'
        },
        {
            title: "Train",
            id: 4,
            imgUrl: 'https://i.ibb.co/Pt2ctyv/unnamed.jpg'
        }

    ]
    return (
        <div style={style} className="header">
            <h1>This is home component</h1>
            {
                vahicles.map(vahicle=><Vehicle vahicle={vahicle} key = {vahicle.id}></Vehicle>)
            }
         
        </div>
    );
};

export default Home;