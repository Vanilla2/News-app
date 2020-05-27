import React, { useState, useEffect } from 'react';
/* eslint-disable */
function Navbar(props){
    const [value, setValue] = useState("");
    function handleChange(event){
        setValue(event.target.value);
    }
    function handleKey(event){
        if (event.keyCode == 13){
            let passValue = value.trim();
            setValue("");
            if (passValue !== ""){
                props.handleChange(passValue);
            }
        }
    }
    useEffect(() =>{
        document.addEventListener("keyup", handleKey);
        return(() =>{
            document.removeEventListener("keyup", handleKey);
        });
    });
    return(
        <div className = "view-box">
            <p className = 'view-text'>
                You are viewing: <u>{props.view}</u>
            </p>
            <div className = "search-box">
                <p className = "search-text">
                    Search for news:
                </p>
                <input type = "text" placeholder = "Ex: Bitcoin" onChange = {handleChange} className = "search-input" value = {value} />
            </div>
        </div>
    )
}
export default Navbar;