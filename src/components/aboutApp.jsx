import React from 'react'

import NodeImg from "../images/node.png"
import MongodbImg from "../images/mongodb.png"
import ReactImg from "../images/react.gif"

export const AboutApp =() =>
{
  return(  
        <div class="container">
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />

            <h1 className="display-4 text-left py-1">MERN Full Stack App</h1>
            <p >Hi, Thanks for visiting my app.</p>
            <p class="description"> developed an app using MERN technologies with basic crud 
            applications.</p>
<p></p>
            {/* <!-- end row --> */}
            <div class="row ">
                <div class="col-lg-4 ">
                    <div class=" card-box border border-dark">
                        <div class=" member-card pt-2 pb-2">
                            <div class=" text-center thumb-lg member-thumb mx-auto"><img src={ReactImg} width="150" height="150" class="rounded-circle img-thumbnail" alt="profile-image" /></div>
                            <div class="text-center">
                                <h4>FrontEnd - React JS</h4>
                                <p class="text-muted">Learned React JS and able to do the following tasks </p>
                            </div>
                            <ul class="social-links align-baseline">
                                <li class="listm">Create single page applications</li>
                                <li class="list">Build reusable components</li>
                                <li class="list">State management with hooks & redux</li>
                                <li class="list">Git to deploy codes on web</li>
                                <li class="list">Deployed client on Netlify</li>
                                
                            </ul>
                            
                             </div>
                    </div>
                </div>
                {/* <!-- end col --> */}
                <div class="col-lg-4 ">
                    <div class=" card-box border border-dark">
                        <div class="member-card pt-2 pb-2">
                            <div class="text-center thumb-lg member-thumb mx-auto">
                            <img src={NodeImg} width="150" height="150" class="rounded-circle img-thumbnail" alt="profile-image" /></div>
                            <div class="text-center">
                                <h4>Backend - Express & Node JS</h4>
                                <p class="text-muted">Learned Express & Node JS and able to do the following tasks </p>
                            </div>
                            <ul class="social-links align-baseline">
                                <li class="listm">Setup server using express</li>
                                <li class="list">Setup REST API with axios</li>
                                <li class="list">Implemented Controllers & Routes</li>
                                <li class="list">Validata API calls using REST clients</li>
                                <li class="list">Deployed server on Heroku <a href="https://mern-karthik.herokuapp.com/">check here</a> </li>
                                
                            </ul>
                            
                            
                        </div>
                    </div>
                </div>
                {/* <!-- end col --> */}
                <div class="col-lg-4">
                    <div class="card-box border border-dark">
                        <div class="member-card pt-2 pb-2">
                            <div class="text-center thumb-lg member-thumb mx-auto">
                            <img src={MongodbImg} width="150" height="150" class=" img-thumbnail" alt="profile-image" /></div>
                            <div class="text-center ">
                                <h4>Database - MongoDB</h4>
                                <p class="text-muted">LearnedMongoDb and able to do the following tasks </p>
                            </div>
                            <ul class="social-links align-baseline">
                                <li class="listm">Able to work with clusters</li>                                
                                <li class="list">Perform CRUD operations</li>
                                <li class="list">Connect Database using Api to client</li>
                                <li class="list">Setup config files</li>
                                <li class="list">To process data in Atlas account</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                {/* <!-- end col --> */}
            </div>


        </div>
        
    
  )
}
