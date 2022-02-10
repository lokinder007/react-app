import React from 'react';
import { Link } from 'react-router-dom';
import imgTodo from "../assets/todo_list.jpg"
import imgContact from "../assets/contacts.jpg"
import imgCalculator from "../assets/calculator.jpg"
import img from "../assets/webdev.jpg"

const Projects = () => {
    return (
       <div className='justify-content-center'>
         

                {/* <h1 className="text-center text-success text-capitalize my-5"> our services</h1> */}
                <h1 className="mb-4 text-success colump"><b> Our Projects </b></h1>

                <div className="container col-md-12 my-5">
                    <div className="row">

                        <div className="col-md-3 my-2">
                            <div className="card text-white bg-danger" >
                                <img style={{height:200, width:200}} src={imgTodo} className="mx-auto" alt="Todo..." />
                                <div className="card-body">
                                    <h3 className="card-title ">Todo List</h3>
                                    {/* <p className="card-text h4"> LokeshApp offers a powerful ToDo List App </p> */}
                                    <Link to="/todo" className="btn ">Check Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 my-2">
                            <div className="card text-white bg-info" >   
                                <img style={{height:200, width:200}} src={imgContact} className="mx-auto" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">Contact App</h3>
                                    {/* <p className="card-text h4">Some quick example of projects</p> */}
                                    <Link to="/contactApp" className="btn btn-primary">Check Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 my-2">
                            <div className="card text-white bg-success" >
                                 {/* <img style={{height:300}} src="https://picsum.photos/201" className="card-img-top" alt="..." /> */}
                                <img style={{height:200, width:200}} src={imgCalculator} className="mx-auto" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">Calculater</h3>
                                    {/* <p className="card-text h4">Some quick example of projects</p> */}
                                    <Link to="/calculator" className="btn">Check Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-2">
                            <div className="card text-white bg-warning" >
                                <img style={{height:200, width:200}}  src={imgCalculator} className="mx-auto " alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title"> App</h3>
                                    {/* <p className="card-text h4">Some quick example of projects</p> */}
                                    <Link to="/calculator" className="btn">Check Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-2">
                            <div className="card text-white bg-info" >
                                <img style={{height:200, width:200}} src={img} className="mx-auto" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title"> App</h3>
                                    {/* <p className="card-text h4">Some quick example of projects</p> */}
                                    <Link to="/calculator" className="btn">Check Now</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
       </div>
    )
};

export default Projects;
