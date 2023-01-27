
const initialstate = {
    mod: 'light'
}


export const mode = (state = initialstate, { type, payload }) => {
    switch (type) {
        case 'DARK':  if(state.mod == "light") {
           return {
            ...state, mod:payload   };  
        } else {
            return  {
                ...state , mod:'light'
            }
        }
    
    
    default : return state
}
}

// mod:payload