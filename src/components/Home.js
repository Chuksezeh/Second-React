import React from "react"
import Body from "./project-body/body" 
import Header from "./header/header"
import Bodytext from "./project-body/bodytext"
import ImageMan from "./project-body/body"

const Home =()=>{
    return(
        
        <>
       
        <Header/>
        <h2 className="company-name">Free<span className="second-head">lancer</span></h2> 
        <ImageMan/>
        <Bodytext/>
        
        
      </>
    )
}
export default Home