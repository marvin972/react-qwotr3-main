import React from 'react';
import './Message.css';

export default function Message(props) {
    return (
        <div className='message'>
            <h2>Les props dans React</h2>
            <h3>Salut à toi {props.prenom}</h3>
            <p>{props.messagePasse}</p>
        </div>
    )

}