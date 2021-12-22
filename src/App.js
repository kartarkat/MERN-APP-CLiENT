// src/App.js

import { BrowserRouter, Route, Routes } from "react-router-dom";   //changed
// import { ShowTodoList } from "./components/showTodoList";
// import { CreateTodo } from "./components/createTodo";
import { Home } from "./components/home";
//import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="app-contents">
            <BrowserRouter>
                <Routes>   
                    <Route exact path="/" element={<Home/>} />  
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;