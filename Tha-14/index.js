// Event Listeners

const print=document.querySelector('#print');


// onChange
document.querySelector('input').addEventListener('change', () =>{
    print.innerHTML= `You changed the input`
})

// onClick
document.querySelector('button').addEventListener('click', () =>{
    print.innerHTML= `You clicked the button`;
})


// keyUp
document.querySelector('input').addEventListener('keyup', () =>{
    print.innerHTML= `Key Released`    
})

// keyDown
document.querySelector('input').addEventListener('keydown', () =>{
    print.innerHTML= `Key Pressed`   
})

// Double Click
document.querySelector('button').addEventListener('dblclick', () =>{
    print.innerHTML=`Button Double Clicked`
})

// Focus Lost
document.querySelector('button').addEventListener('blur', () =>{
    print.innerHTML=`Lost Focus`
})

// Focus Gained
document.querySelector('input').addEventListener('focus', () =>{
    print.innerHTML=`Gained Focus`
})

// mouse over
document.querySelector('input').addEventListener('mouseover', () =>{
   print.innerHTML=`Mouse moved over`
})

// mouse out
document.querySelector('input').addEventListener('mouseout', () =>{
    print.innerHTML=`Mouse moved out`
})
