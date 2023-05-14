import React,{useState,useEffect, useContext} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
// import Footer from "./components/Footer";
import TodosList from "./components/TodosList";
import {count} from "./components/Context";
import './App.css';

const getTodos=()=>{
  let list=localStorage.getItem("todos");
  // console.log(list);

  if(list){
    return JSON.parse(localStorage.getItem("todos"));
  }
  else{
    return [];
  }
}

const App = () => {
  const [editIcon,setEditIcon]=useState(JSON.parse(localStorage.getItem("lists12")))
  // const initialState=JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState(getTodos());
  const [editTodo,setEditTodo]=useState(null);
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <div className="container">
      <count.Provider value={{editIcon,setEditIcon}} >
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
       
        <div>
          <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList 
            todos={todos} 
            setTodos={setTodos} 
            setEditTodo={setEditTodo} 
            
          />
        </div>
        <div>
          {/* <Footer /> */}
        </div>
      
      </div>
    </count.Provider>
    </div>
  );
}

export default App;
