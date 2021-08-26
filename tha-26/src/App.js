import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { setUsername, setEmail } from './actions/index.';
import { Container, Paper, TextField, Button } from '@material-ui/core';
import { useState } from 'react';

function App() {
  const username = useSelector((state) => state.displayUsername);
  const email = useSelector((state) => state.displayEmail);
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [mail, setMail] = useState('');
 
  return (
    <div className="App">
      <Container maxWidth='sm'>
        
        <Paper elevation={7} style={{padding: 30, borderRadius: 15}}>
        <h1 style={{textAlign: 'center', marginTop: '0'}}>User Credentials</h1>
        <TextField 
            style={{
                  marginTop:10,
                  marginRight: 45,
                  marginBottom: 20
              }}
            required
            id="outlined-required"
            label="Username"
            variant="outlined" 
            type="text" 
            placeholder="Username"
            value={user} 
            onChange={(e)=> (setUser(e.target.value))} 
          />
          <TextField 
            style={{
                  marginTop:10, 
                  marginBottom: 20
              }}
            required
            id="outlined-required"
            label="Email"
            variant="outlined" 
            type="text" 
            placeholder="Email" 
            value={mail}
            onChange={(e)=> (setMail(e.target.value))} 
          />
          <Button 
              variant="contained" color="secondary" size="medium" 
              style={{marginLeft: 210, marginBottom: 30}} 
              onClick={() => {
                dispatch(setUsername(user)); 
                dispatch(setEmail(mail));
                setUser('');
                setMail('');
            }}>Submit
          </Button>
      <div>
        <Paper elevation={1} style={{padding: '2px', marginBottom: '20px'}}><span style={{fontSize: '1.3rem'}}> <strong>Username :</strong> <i>{username}</i></span></Paper>
        <Paper elevation={1} style={{padding: '2px', marginBottom: '20px'}}><span style={{fontSize: '1.3rem'}}> <strong>Email :</strong> <em>{email}</em></span></Paper>
      </div>
      </Paper>
      </Container>
    </div>
  );
}

export default App;