import React, { Component } from 'react';

 const Irgmg = (props)=>{
     return(

    <div>
        <div className="lg-img-hldr">
            <div className="top-bar">
                <a href="#" ><img src = '../icon/close-svg.svg' alt=""/></a>
            </div>
            <img src = {props.src} alt="" />
            <div className="bottom-bar">
                <h3 className="title">{props.title}</h3>
                <div className="description">{props.details}</div>
                </div>
                </div>
        </div>
     );
}

export default  Irgmg;