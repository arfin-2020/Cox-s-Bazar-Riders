
import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../config';
const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
      const [newUser, setnewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        newUser: false,
        email: '',
        password: '',
        photo: '',
        error:'',
        success: false
    
      })
    const handleBlur = (e) =>{
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /^\S+@\S+\.\S+$/.test(e.target.value);       
        }

        if(e.target.name === 'password'){
        const IsPasswordValid = e.target.value.length > 6;
        const IsPasswordHasNumber = /\d{1}/.test(e.target.value);
        isFieldValid = IsPasswordValid && IsPasswordHasNumber;
        }

        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value; 
            setUser(newUserInfo);
        }
    }
    
    //createUserWithEmailAndPassword
    const handleSubmit = (e) =>{
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                // updateUserName(users.name)
             
              })
  .catch((error) => {
    const newUserInfo = { ...user };
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);
  });
    }
    if(!newUser && user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                
             
              })
  .catch((error) => {
    const newUserInfo = { ...user };
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);
  });
    }
        e.preventDefault();
    }
    return (
        <div>
        <h1>Create an Account</h1>
        <form onSubmit = {handleSubmit}>
        {newUser && <input type="text" onBlur={handleBlur} name='name' placeholder="Your Name" />}<br/><br/>
            <input type="text" name="email" onBlur = {handleBlur}  placeholder='Username or Email' required/> <br/><br/>
            <input type="password" name="password" onBlur = {handleBlur}  placeholder='Password' required/><br/><br/>
            <input type="submit" value="Submit"/>
           {/* {!newUser && <p>Already have an account? </p>} */}
        </form>
        <p onClick={() => setnewUser(!newUser)} name = 'newUser'>Don't have an account? <span  style={{color:"red",cursor: 'pointer'}}>create account</span></p> 
        {/* <input type="checkbox" onChange={() => setnewUser(!newUser)} name = 'newUser'/> */}
        {/* <label htmlFor="newUser">New user signup</label> */}
        <p style={{color:"red"}}>{user.error}</p>
        {user.success && <p style={{color:"green"}}> User {newUser ? "Created" : "logged in"} Successfully</p>}






{/* <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}
        </div>
    );
};

export default Login;