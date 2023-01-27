import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, isDone, isImpotant,  setTitle } from "./redux/action/action";
import { setDark } from "./redux/action/ModeAction";
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'antd';




function App() {
  const [inp, setinp] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const onChange = (checked) => {
  // console.log(`switch to ${checked}`);
  dispatch(setDark('dark'))
};
  const title = useSelector((state) => state.tasks.todos)
console.log(title);
  const mode  = useSelector((state) => state.mode)
console.log(mode.mod , 'iii');
localStorage.setItem('mode' , mode.mod)
let local = localStorage.getItem('mode')
  let dispatch = useDispatch()
  let addF = () => {
    dispatch(setTitle(inp))
   
    setinp('')

  }

  let inpF = (e)=>{
    setinp(e.target.value)

  }

  return (
       local == 'dark' ?
       <>
      
       <div className="App bg-dark text-white ">
        {/* <button onClick={} > click   </button> */}
        <div className="mode  m-3 ">
 <span className="mx-3 fs-5 ">Light</span>

        <Switch defaultChecked onChange={onChange} /> 

        </div>
       
         <div className="col-8 mx-auto my-5">
           <div className="row">
   
             <div className="col-8 col-md-6 col-lg-6 d-flex justify-content-end">
               <div className="col-lg-6 ">
                 <input value={inp} type="text" className="form-control" onChange={inpF} />
               </div>
   
             </div>
             <div className="col-2 ">
               <button className="btn btn-outline-success" onClick={addF}>добавить</button>
             </div>
           </div>
         </div>
     <ol className=" col-md-10 col-lg-8 mx-auto ">
   
         {
           title.map(i =>
             <>
            
             <li className="my-3" >
             <div className="row ">
                  <div className="col-6"> 
             <span className="title" style={{ color: i.isImportant ? "red" : "white", "textDecoration": i.isDone ? "line-through" : 'none' }} >{i.title}</span>
              </div>
       <div className="todoBtn col-6 text-start  ">
                   <button className="btn btn-danger mx-3 " onClick={() => dispatch(deleteTask(i.id))} > delete </button>
                   <button className="btn btn-success " onClick={() => dispatch(isImpotant(i.id))} > важный </button>
                   <button className="btn btn-primary  mx-3" onClick={() => dispatch(isDone(i.id)) }> выполнено </button>
                 </div>
               </div>
          
             </li>
                 
             
            
   
             </>
   
   
           )
         }
      </ol>
   
       </div>
       </>
    
    : 
     <>
    <div className="App">
     {/* <button onClick={()=> dispatch(setDark('dark'))} > click   </button> */}
     <div className="mode mx-3 my-3">
           <span className="mx-3 fs-5">Dark</span>
     <Switch  onChange={()=> dispatch(setDark('dark'))} />
     </div>

    
      <div className="col-8 mx-auto my-5">
        <div className="row">

          <div className="col-8 col-md-6 col-lg-6 d-flex justify-content-end">
            <div className="col-lg-6 ">
              <input value={inp} type="text" className="form-control" onChange={inpF} />
            </div>

          </div>
          <div className="col-2 ">
            <button className="btn btn-outline-success" onClick={addF}>добавить</button>
          </div>
        </div>
      </div>
  <ol className=" col-md-10 col-lg-8 mx-auto ">

      {
        title.map(i =>
          <>
         
          <li className="my-3" >
          <div className="row ">
               <div className="col-6"> 
          <span className="title" style={{ color: i.isImportant ? "red" : 'black'  , "textDecoration": i.isDone ? "line-through" : 'none'} } >{i.title}</span>
          
           </div>
    <div className="todoBtn col-6 text-start  ">
                <button className="btn btn-danger mx-3 " onClick={() => dispatch(deleteTask(i.id))} > delete </button>
                <button className="btn btn-success mx-3" onClick={() => dispatch(isImpotant(i.id))} > важный </button>
                <button className="btn btn-primary  mx-3" onClick={() => dispatch(isDone(i.id)) }> выполнено </button>
              </div>
            </div>
       
          </li>
              
          
         

          </>


        )
      }
   </ol>

    </div>
    </>
    

  )
}

export default App;
