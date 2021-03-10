import React from 'react'
import './Avatar.css'

const styles={
    square:"10px",
    circle:"50%"
}

export function Avatar(props) {
    const {image,shape,borderColor,width} =props
    const borderRadius={
                "borderRadius":`${styles[shape.toLowerCase()]}` ,
                "border":`2px solid ${borderColor}`,
                "width" : `${width}`
        }

    console.log(borderRadius)
    function GetComponent(){
        if(shape.toLowerCase()==="square"){
            console.log(borderRadius)
            return(
            <div className="avatar">
                <img src={image} style={borderRadius} alt=""/>
            </div>
            )
        }
            return(
                <div className="avatar">
                <img src={image} style={borderRadius} alt=""/>
            </div>
            )
            
    }
    return (
        <GetComponent/>
    )     
}