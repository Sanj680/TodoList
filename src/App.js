import './App.css';
import ToDoList from './components/TodoList';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import data from "./data.json";
import { useState ,useEffect} from 'react';
import './App.css'
import ToDoForm from './components/ToDoForm';





function App(props) {
  const [ toDoList, setToDoList ] = useState(data);


  useEffect(()=>{   // storing data on refresh
    if(localStorage.getItem("localTasks")){
        const storedList = JSON.parse(localStorage.getItem("localTasks"));
        setToDoList(storedList);
    }
},[])

  const addTask = (userInput ) => {
    const copy = {id: toDoList.length + 1, task: userInput, complete: false };
    setToDoList([...toDoList,copy]);
    localStorage.setItem("localTasks", JSON.stringify([...toDoList, copy]));
   
  }

  const handleFilter = (index) => {
   const deleted = [...toDoList]
   deleted.splice(index,1)
   setToDoList(deleted)
    localStorage.setItem("localTasks", JSON.stringify(deleted))
  }

  return (
    <div className="App">
      <div>
      <ToDoList toDoList={toDoList} handleFilter={handleFilter} /> {/* todo list passed as obj */}
      <ToDoForm addTask={addTask}/>
      </div>
    </div>
  );
}

export default App;
