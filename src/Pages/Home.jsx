import React from 'react'
import Moon from "../Assets/Images/Moon.png"
import SittingYoga from "../Assets/Images/Sitting yoga.png"
import YogaLogo from "../Assets/Images/img.png"
import "../Assets/CSS/Home.css"
import {Slider}  from '../Components/Slider'
import { Header } from '../Components/Header'

export const Home = () => {
  return (
    <>
    <Header />
    <div style={{backgroundColor:"#4e5388", width:"100%", minHeight:"100%", paddingBottom:"2rem"}}>
        <img src={Moon} style={{width:"7rem", marginLeft:"4rem", marginTop:"1rem", borderRadius:"50%",boxShadow:"-7px 16px 38px -7px white"}} alt=""/>
        <div style={{backgroundColor:"white", width:"80vw", marginBottom:"2rem", marginTop:"1rem", minHeight:"100vh", margin:"auto", borderRadius:"30px", padding:"20px" ,boxShadow:"white -11px 24px 98px -40px"}}>
            <div style={{display:"flex"}}>
            <div style={{width:"35vw", textAlign:"center", marginLeft:"6rem", marginTop:"2rem"}}>
                <p style={{fontWeight:"bold", fontSize:"3rem"}}>A complete workout from head to toes</p>
                <p style={{fontSize:"20px", marginTop:"-1rem"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet exercitationem quas itaque laboriosam veritatis nemo architecto mollitia sunt dolorum! Dolori Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse animi eaque officiis quis quidem possimus rerum distinctio 
                </p>
            </div>
            <img className='mover ladyimg' src ={SittingYoga} alt="" style={{width:"40vw", marginTop:"-10rem"}}/>
            </div>
            
            <div style={{ display:"flex", padding:"0.3rem",  borderRadius:"20px",backgroundColor:"#d5ebc2"}}>            
            <img className='ladyimg' src ={YogaLogo} alt="" style={{width:"35vw", marginLeft:"2rem"}}/>
            <div className='stitched' style={{width:"30vw",margin:"auto", textAlign:"center", backgroundColor:"white", borderRadius:"30px", boxShadow:"white 0px 0px 0px 13px", padding:"1rem 3rem"}}>
                <p style={{fontWeight:"bold", fontSize:"2.5rem", textAlign:"right", margin:"7px 0px 39px 0px"}}>A complete workout from head to toes</p>
                <p style={{fontSize:"20px", marginTop:"-1rem",textAlign:"right", lineHeight:"1.5em"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. met consectetur adipisicing elit. Dignissimos esse animi eaque officiis quis quidem possimus rerum distinctio 
                </p>
            </div>
            
            </div>
            <div className="mid" style={{ marginTop:"3rem"}}>
            <h1  style={{fontWeight:"bold", fontSize:"2.5rem", textAlign:"center", margin:"auto", padding:"7px", marginBottom:"-5rem"}}>What people say about us</h1>
            <Slider />
            </div>
            
        </div>
        
    </div>
    </>
  )
}
