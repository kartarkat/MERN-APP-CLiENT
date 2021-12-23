import React from 'react'
import TodoIcon from "../images/todoIcon.png"
import Popup from 'reactjs-popup'
import {DevProfile}  from "./devProfile"


export const NavBar =() =>
{
  return(
    
     
      <nav className="navbar  navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
              <img style={{ marginRight: "15px", marginLeft: "15px" }}
                  src={TodoIcon} width="30"
                  height="30"
                  class="d-inline-block align-top mr-6"
                  alt="" />
              To-Do-App
          </a>

        <div className='align-right'>

              <Popup trigger={
                  <button class="btn align-middle btn-secondary" type="button"
                      style={{ marginRight: "5px", marginLeft: "5px" }}> Developer
                      
                  </button>}
                  position="bottom left">
                  {close => (
                      <div>
                          <div> <DevProfile close={close} /></div>

                      </div>
                  )} 
             </Popup>

          <button class="btn align-middle btn-secondary" type="button" style={{ marginRight: "5px", marginLeft: "5px" }}>
              <a style={{ all: "unset" }} href="/About-App" >About app</a></button>
          </div>    

          {/* <a style={{ all: "unset" }} href="/About-App" >About app</a> */}
         </nav>
  )
}


