import { useState } from "react";
import useArray from "./useArray";
import { Paper, Container, TextField, Button, Checkbox } from '@material-ui/core';
import  DeleteIcon  from '@material-ui/icons/Delete';


const Main = () => {

    const addTodo = useArray(["Dance", "Read", "Code"]);

    const [value, setValue] = useState("");

    
    return (
        <div>

            <Container  maxWidth="sm">
                <Paper elevation={4}>
                    <h3>Todo List</h3>

                    <TextField style={{marginLeft:"15px"}} id="outlined-basic" label="Todo" variant="outlined" value={value} onChange={(e) => { setValue(e.target.value) }} />
                    <Button style={{marginLeft:"5px" ,marginTop:"10px"}} variant="contained" color="secondary" onClick={() => {
                        addTodo.add(value);
                        setValue(" ")
                    }}>
                        Add todo
                    </Button>


                    <ul>{
                        addTodo.bullet.map((i, index) => (

                            <li key={index}>{i} <DeleteIcon size="2px" onClick={() => { addTodo.clr(index) }} /></li>
                        ))


                    }
                    </ul>
                    <Button style={{margin:"15px"}}  variant="contained" color="secondary" onClick={() => { addTodo.allclr() }}>Clear All</Button>
                </Paper>
            </Container>
        </div>
    );

}

export default Main;
