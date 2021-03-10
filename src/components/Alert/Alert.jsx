import React from 'react'
import './Alert.css'


export function Alert(props) {
    const {type,text} = props
    return (
        <div className="alert" style={alerts[type]}>
             <p>{text}</p>
        </div>
    )
}
const alerts = {
    primary:{
        "border": "1px solid #B8DAFF",
        "backgroundColor":"#CCE5FF",
        "color": "#00659F"
    },
    secondary:{
        "border": "1px solid #D6D8DB",
        "backgroundColor":"#E2E3E5",
        "color": "#696F61"
    },
    success:{
        "border": "1px solid #C3E6CB",
        "backgroundColor":"#D4EDDA",
        "color": "#155724"
    },
    danger:{
        "border": "1px solid #F5C6CB",
        "backgroundColor":"#F8D7DA",
        "color": "#721C24"
    },
    warning:{
        "border": "1px solid #FFF3CD",
        "backgroundColor":"#FFEEBA",
        "color": "#856404"
    },
    info:{
        "border": "1px solid #BEE5EB",
        "backgroundColor":"#D1ECF1",
        "color": "#0C5460"
    },
}