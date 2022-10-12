import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import ToDo from './ToDo'

const TodoList = ({toDoList, setToDoList, handleFilter}) => {

    const update = (id, updtedTask) => {
        const updatedTodos = toDoList.map(todo => {
          if (todo.id === id) {
            return { ...todo, task: updtedTask };
          }
          return todo;
        });
        setToDoList(updatedTodos);
      };
return(

    <>
    <div className="tododesign">
    
       
    <div className="navbar navbar-dark nav-color">

           <div className="container-fluid"
              style={{
                color: 'blueviolet'
            }}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">     </span>
                
                </button>
                <h4 className="text-white">Website  todo</h4>
            </div>
           
        </div>
        <br></br>
        <div className='items'>
        
        {toDoList.map((todo,index) => {
               return (
                   <><ToDo todo={todo}> 
                   update={update}
                   </ToDo>
                   <button className='btn' onClick={()=>handleFilter(index)}><i className="fa fa-trash"  aria-hidden="true"></i></button>
                   <button className='btn1' style={{ marginLeft: -5 , border:0, marginTop: -60}}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                   </>
               )
           })}


        
        

       
      
            </div>
            
        </div></>
)



}
export  default TodoList