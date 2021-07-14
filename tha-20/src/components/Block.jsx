import React from 'react'
import {useState} from 'react'

export default function Block(props)
{

    const {head,subt, inc ,cds}=props;

    let arr=cds;
    
  
return (
    <div>
       
        <div className="Card"> 
         <h1 className="title">{head}</h1>
   <i class="fas fa-trash dlt"onClick={
            ()=>{
                let a=arr.filter((el,i)=> i!=inc);
                props.setCards(a);
            }
            }></i>
       
        <h2>Dance Styles: {subt}</h2>
       
        </div>
    </div>
);

}