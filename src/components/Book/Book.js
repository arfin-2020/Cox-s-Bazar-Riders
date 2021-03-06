import React from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import './Book.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const Book = () => {
    const {type} = useParams();
    console.log("heda",type);
    const classes = useStyles();
    // const matchingVahicles = vahicle.find(p => p.id === type.id)
    // console.log(matchingVahicles)
    return (
        <div className="row">
        <div className="col-sm-12 col-md-6">
            <div className="from-div">
                <h4>Pick from</h4>
                <input className="inputfrom form-control" type="text"/>
                <h4>Pick To</h4>
                <input className="inputfrom form-control" type="text"/> <br/><br/>
                <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form> <br/><br/>
                <input className= 'btn btn-success inputfrom' type="submit" value="Search"/>
            </div>
        </div>
        <div className="col-sm-12 col-md-6">
        {/* <Map google={this.props.google} zoom={14}>
 
            <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

     <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       <h1>{this.state.selectedPlace.name}</h1>
     </div>
    </InfoWindow>
</Map> */}
                {/* Here I want use google map but not install here so I can't able to use google map just using a image */}
                <img src="http://www.techetron.com/wp-content/uploads/2017/11/IMG_8308-750x430.png" alt="googleImg"/>
                {/* <img src={vahicle.imgUrl} alt=""/> */}
        </div>
      
    </div>
    );
};

export default Book
 
