import React from 'react'
import DevPicture from "../images/devProfile.png"
//import '../devProfile.scss'

export const DevProfile =() =>
{
  return( 
      
    

<div class="wrapper">
	<div class="top-icons">
		<i class="fas fa-long-arrow-alt-left"></i>
		<i class="fas fa-ellipsis-v"></i>
		<i class="far fa-heart"></i>
	</div>
	
	<div class="profile">
		<img src={DevPicture}  width="150"  height="150" class="thumbnail"/>
		<div class="check"><i class="fas fa-check"></i></div>
		<h3 class="name">Karthikeyan T</h3>
		<p><b>Web Developer</b></p>
		<p class="description">Hello, this is Karthikeyan and I'm currently looking for opportunities in the Web Development field
with a focus on developing Awesome websites. I've obtained knowledge on various technologies and
practising more on that to improve my skills, exposure, to reach my Goal.</p>
		
	</div>
	
	
</div>


        
  )
}

    