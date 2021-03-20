import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Book = () => {
    const {type} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
        <h1>Let's book a {type} vehicles.</h1>
        <p>Want a <Link to="/home">different vehicles?</Link> </p>
    </div>
    );
};

export default Book;