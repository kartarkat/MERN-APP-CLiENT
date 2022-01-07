import { useState, useEffect } from "react";
import axios from "axios";
import { HashRouter } from "react-router-dom";

export function EditItem({ _id, handleClose, handleEdited, close }) {
    const [todo, setTodo] = useState([]);
    const [data, setData] = useState({ title: "", description: "" });
    const [edit, setEdit] = useState(false);

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    
    useEffect(

        function () {
           
            axios
                .get(`https://mern-karthik.herokuapp.com/api/todo/${_id}`)
                .then((res) => {
                    //console.log(res.data);
                    setTodo(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                });

         },
       

      [edit]
    )

    function handleSubmit(e ) {
        //const { _id, title, description } = data;
        
        e.preventDefault();

        // const todo = {
        //     title: data.title,
        //     description: data.description,
        // };
        
            axios
            .put(`https://mern-karthik.herokuapp.com/api/todo/${_id}`, data)
            .then((res) => {
                setData({ title: "", description: "" });
                console.log(res.data.message);
                //setData((data) => ({ ...data, [e.target.name]: e.target.value }));
                //handleChange()
                setEdit(!edit)
            })
            .catch((err) => {
                console.log("Failed to update todo");
                console.log(err.message);
            });

            //useEffect()


    }


    return (
        <section class="section-1-container section-container">
            <div class="form-container">
            <form className="form-inline" onSubmit={(e) => {handleSubmit(e);close();}}>
                <div className="row-2">
                    <div className="row-2">
                        <label className="sr-only" htmlFor="title"> <h3> Title: </h3> </label>
                        <input required type="text" placeholder="Enter Title here" className="form-control" name="title" value={data.title} onChange={handleChange} />
                    </div>
                    <div className="row-2">
                        <label className="sr-only" htmlFor="description"> <h3> Description:</h3> </label>
                        <input type="text" placeholder="Enter description here" className="form-control" name="description" value={data.description} onChange={handleChange} />
                    </div>
                </div>

                <button type="submit" className="btn btn-success mt-2 mb-4 ">Save Edited Item</button>
            </form>
            </div>
        </section>
    )
}