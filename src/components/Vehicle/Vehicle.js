import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import './Vehicle.css'
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }));
export default function Vehicle({vahicle}){
    const classes = useStyles();
    const history = useHistory()
    const handleBook = (type) => {
        history.push(`/book/${type}`);
    }
    return (
       
        <div className="main-container container">
        <Button onClick={() => handleBook(vahicle.type)} >
        <Card className={classes.root}>
        <CardHeader
          title={vahicle.type}
        />
        {/* <CardMedia
          className={classes.media}
          image={vahicle.imgUrl}  
          component='img'
         width='140'
        /> */}
        <img src={`${vahicle.imgUrl}.png`} alt=""/>
      </Card> 
      </Button>
        </div>
       
    );
};

