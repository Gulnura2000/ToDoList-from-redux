export const setTitle = (title)=>{ 
    return{
        type : 'ADD',
        payload:title
    }
   
 }

 export const deleteTask = (id)=>{
    return{
        type :"DELETE",
        payload: id
    }
 }

 export const isImpotant = (id)=>{
    return {
        type : 'IMPOTANT',
        payload : id
    }
 }

 export const isDone = (id)=>{
    return {
        type: 'ISDONE',
        payload: id
    }
 }



