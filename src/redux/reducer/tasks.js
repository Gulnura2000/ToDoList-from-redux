

const initialstate = {
    todos: [
        {
            title: 'пойти гулять',
            isdelete: false,
            isImportant: false,
            isDone: false,
            id: 1
        }
    ],
   count : 1
}

export const tasks = (state = initialstate, action) => {
    switch (action.type) {

        case 'ADD': {
            return {
            ...state,
           todos : [
            ...state.todos,
            {
                title: action.payload,
                isdelete: false,
                isImportant: false,
                isDone: false,
                id: Math.floor(Math.random()*1000)
            }
           ],
           count : state.count+1 
        } 
        }
        case 'DELETE' : {
            return {
                ...state ,
                todos: state.todos.filter(i => i.id != action.payload),
                count: state.count - 1
            }
        }
        case 'IMPOTANT': {
            return {
                ...state,
                todos: state.todos.map(i=> {
                    if(i.id == action.payload ){
                      return  {...i , isImportant: !i.isImportant }
                    } 
                    return i
                })
            }
        }
        case 'ISDONE' : {
            return {
                ...state ,
                todos :  state.todos.map(i => {
                    if(i.id == action.payload ){
                        return { ...i , isDone: !i.isDone }
                    }
                    return i
                })
                
            }
        }
        
        default: return state
    }

}