// src/App.js

import { BrowserRouter, Route, Routes } from "react-router-dom";   //changed
// import { ShowTodoList } from "./components/showTodoList";
// import { CreateTodo } from "./components/createTodo";
import { Home } from "./components/home";
//import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navBar"
import { DevProfile } from "./components/devProfile"
import { AboutApp } from "./components/aboutApp"


function App() {
    return (
        <div className="app-contents">
            <NavBar />
            <BrowserRouter>
                <Routes>   
                    <Route exact path="/" element={<Home/>} />   
                    <Route path='/Developer-Profile' element={<DevProfile />}/>
                    <Route path='/About-App' element={<AboutApp />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;