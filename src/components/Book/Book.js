import React from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Book.css'
const Book = () => {
    const {type} = useParams();
    return (
        <div className="row">
        {/* <h1>Let's book a {type} vehicles.</h1> */}
        <div className="col-6">
            <div className="from-div">
                <h4>Pick from</h4>
                <input className="inputfrom form-control" type="text"/>
                <h4>Pick To</h4>
                <input className="inputfrom form-control" type="text"/> <br/><br/>
                <input className= 'btn btn-success inputfrom' type="submit" value="Search"/>
            </div>
        </div>
        <div className="col-6">
        {/* <Map google={this.props.google} zoom={14}>
 
            <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

     <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       <h1>{this.state.selectedPlace.name}</h1>
     </div>
    </InfoWindow>
</Map> */}
        </div>
        {/* <p>Want a <Link to="/home">different vehicles?</Link> </p> */}
    </div>
    );
};

export default Book
 
