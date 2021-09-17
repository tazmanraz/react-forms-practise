import React, { useState } from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername]=useState('');
  const [enteredAge, setEnteredAge]=useState('');
  
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredUsername, enteredAge) // gets the user input
  }

  const usernameChangehandler = e => {
    setEnteredUsername(e.target.value)
  }

  const ageChangehandler = e => {
    setEnteredAge(e.target.value)
  }

  return (
    
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangehandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangehandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
