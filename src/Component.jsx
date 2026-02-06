import React from 'react'
import { useState , useEffect} from 'react'
export default function Component(props) {

    const [count , setCount]= useState (0); //count est initialisé à 8 et setCount est la fonction pour mettre à jour count
    {/*} useEffect (()=>{
        console.log ("Component mounted");
    },[count]);*/}

    useEffect (()=>{
        console.log ("Component mounted");
    });

   
  return (
    <>
    <div>Component</div>
    <h1>{props.name}</h1> {/* houni nrécupiriew les données elly tba3thou mil parent a travers props  */}
    <p>{props.description}</p>
    {/* <p>Variable value: {props.variable}</p> */}
    <a href={props.link} target="_blank">Visit ESPRIT</a>
    <p>Compteur: {count}</p>
    <div>
    <button className="btn btn-info" onClick={() => setCount(count + props.step)}> +1</button>
    <button className="btn btn-warning" onClick={() => setCount(count - props.step)}> -1</button>
    <button className="btn btn-danger" onClick={() => setCount(props.initialCount)}>Reset</button>
    </div>
    </>
    

    

  )
}

/*export const   Component2=(props)=> {
    const {nom,description,variable,link} = props;
  return (
    <>
    <div>Component</div>
    <h1>{nom}</h1>
    <p>{description}</p>
    <p>Variable value: {variable}</p>
    <a href={link} target="_blank">Visit ESPRIT</a>
    </>
    

    

  )
}*/
