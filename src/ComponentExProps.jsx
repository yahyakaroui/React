import React from 'react'
import { useState } from 'react'
export default function ComponentExProps(props) {
    const [list, setList]= useState (props.initialItems || []);
    const [inputValue, setInputValue] = useState('');
  return (
    <>
    <div>ComponentExProps</div>
    <ul>
        {list.map((item, index) => ( 
            <li key={index}>{item}</li>
        ))}
    </ul>
    <input
        type="text"
        placeholder={props.placeHolder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
    />
    {/* récupérer le texte saisi par l'utilisateur et l'ajouter a la liste */}

    <button className="btn btn-primary" onClick={() => {
        const value = inputValue.trim();
        if (value === '') return;
        setList(
            [
            ...list,
             value
        ]
        );
        setInputValue('');
    }}>Ajouter</button>

    </>

  )
}
