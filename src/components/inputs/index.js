import React from "react";
import './style.css';

export default function Input(props) {
    return (
        <>
        <input className="input" type="text" placeholder={props.placeholder} />
        </>
    );
    }
