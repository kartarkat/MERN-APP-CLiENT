import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { EditItem } from "./editItem"

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


//to list data
function ListData({ data, handleEdit, handleDelete, handleClose, handleUpdate }) { 
    const { _id, title, description } = data;

    return (
    
            <tr key={_id}>                      
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>
                      <Popup trigger={<button name={_id} onClick={handleEdit}className="edit-me btn btn-secondary btn-sm mr-1">Edit</button>} 
                      position="right center">
                    {close => (
                        <div>
                             <div><EditItem
                            _id={_id}
                            handleClose={handleClose}
                            handleUpdate={handleUpdate}
                            close={close}
                        /></div>
                            
                        </div>
                    )}
                       
                    </Popup></td>

                  

                {/* <td><button name={_id} onClick={handleEdit} className="edit-me btn btn-secondary btn-sm mr-1">Edit</button></td> */}
                  <td><button name={_id} onClick={handleDelete} className="delete-me btn btn-danger btn-sm">Delete</button></td>
            </tr >

        
    );
}

export const Home = () => {
    //to add new data
    const [data, setData] = useState({ title: "", description: "" });
    //to display or change data
    const [todo, setTodo] = useState([]);
    //to open popup
    const [open, setOpen] = useState(false); // added
    const [id, setId] = useState(""); // added
    const [update, setUpdate] = useState(false);

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    // //api
    useEffect(
        function () {
            axios
                .get("https://mern-karthik.herokuapp.com/api/todo")
                .then((res) => {
                    //console.log(res.data);
                    setTodo(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        //[update] // updated
    );

    //to create new data
    function handleSubmit(e) {
        e.preventDefault();

        // const todo = {
        //     title: data.title,
        //     description: data.description,
        // };

        // console.log({ todo });
        axios
            .post("https://mern-karthik.herokuapp.com/api/todo", data)
            .then((res) => {
                setData({ title: "", description: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Error couldn't create TODO");
                console.log(err.message);
            });
    }

    //to delete data
    function handleDelete(e) { // added
        axios.delete(`https://mern-karthik.herokuapp.com/api/todo/${e.target.name}`)

        setTodo((data) => {
            return data.filter((todo) => todo._id !== e.target.name)
        })
    }

    //to edit data
    function handleEdit(e) { // added
        setId(e.target.name);
        setOpen(true)
    }

    //to close edit data
    function handleClose() { // added
        setId("");
        setOpen(false);
    }

    //to upddate data
    function handleUpdate(e) { // added
        axios.put(`https://mern-karthik.herokuapp.com/api/todo/${e.target.name}`)
        console.log("update:", update, !update)
        setUpdate(!update)
    }

    

    return(
        <section>
            <div className="container">
                <h1 className="display-4 text-left py-1">To-Do App</h1>            
                
                

                <form className="form-inline" onSubmit={handleSubmit}>
                    <div className="row ">
                        <div className="col-3">
                            <label className="sr-only" htmlFor="title"> <h3> Title: </h3> </label>
                            <input required type="text" placeholder="Enter Title here" className="form-control" name="title" value={data.title} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="sr-only" htmlFor="description"> <h3> Description:</h3> </label>
                            <input type="text" placeholder="Enter description here" className="form-control" name="description" value={data.description} onChange={handleChange} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success mt-2 mb-4 ">Add New Item</button>
                </form>


                <h3 className="display-4 text-left py-1">Your Data</h3>   
                    
               

                <div className="table-responsive">
                    <table className="table table-bordered table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody >

                        {todo.map((data) => (
                            <ListData
                                data={data}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                                handleClose={handleClose}
                                handleUpdate={handleUpdate}
                            />
                        ))}
                        </tbody>

                    </table>
                </div>
            </div>

            {open ? (
                <section className="update-container">
                    
                       

                    <button onClick={handleClose} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                    {/* <Popup trigger={<button> Trigger</button>} position="right center">
                    <div><EditItem
                            _id={id}
                            handleClose={handleClose}
                            handleUpdate={handleUpdate}
                        /></div>
                    </Popup>  */}
                       
                    
                </section>
            ) : (
                ""
            )}
        </section>

    )
}