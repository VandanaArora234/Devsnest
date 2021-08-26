export const displayUsername = (state = '', action) => {  //initialstate = ''
    switch(action.type) {
        case "USERNAME": return state = action.username;
        default : return state;
    }
}

export const displayEmail = (state = '', action) => {    //initialstate = ''
    switch(action.type) {
        case "EMAIL": return state = action.email;
        default : return state;
    }
}