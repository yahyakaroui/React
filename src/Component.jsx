import React from 'react'
import { useState , useEffect} from 'react'
export default function Component(props) {

    const [count , setCount]= useState (0); //count est initialisé à 8 et setCount est la fonction pour mettre à jour count
   //use effect : permet d'exécuter du code après le rendu du composant, il peut être utilisé pour des opérations comme les appels API, les abonnements, ou la manipulation du DOM.
   //  Il prend une fonction de rappel et un tableau de dépendances en argument. La fonction de rappel s'exécute après chaque rendu du composant, et le tableau de dépendances indique quand la fonction doit être réexécutée (lorsque les valeurs dans le tableau changent).
   // equivalent a la phase de montage et de mise à jour dans les composants de classe, en fonction du tableau de dépendances fourni. Si le tableau est vide, le useEffect s'exécutera uniquement lors du montage du composant.
   //  Si le tableau contient des variables, le useEffect s'exécutera à chaque fois que ces variables changent. Si aucun tableau n'est fourni, le useEffect s'exécutera après chaque rendu du composant.
   
   {/*} useEffect (()=>{
        console.log ("Component mounted");
    },[count]);*/}  // tableau de dépendance fyh count : le useEffect ne s'exécute que lorsque count change
  // 
    useEffect (()=>{
        console.log ("Component mounted");
    });

    //use context : permet de partager des données entre les composants sans avoir à passer explicitement les props à chaque niveau de l'arborescence des composants. Il est souvent utilisé pour des données globales comme les thèmes, les préférences utilisateur, ou les données d'authentification.
    //  Le useContext prend un objet de contexte créé avec React.createContext() et retourne la valeur actuelle du contexte. Les composants qui utilisent le useContext seront automatiquement mis à jour lorsque la valeur du contexte change.

   // useRef : permet de créer une référence mutable qui persiste à travers les rendus du composant. Il est souvent utilisé pour accéder directement à un élément du DOM ou pour stocker une valeur qui ne déclenche pas de re-render lorsqu'elle change.
   //  Le useRef retourne un objet avec une propriété current qui peut être utilisée pour stocker une référence à un élément du DOM ou à une valeur mutable. Contrairement au state, la modification de la valeur de current ne déclenche pas de re-render du composant.
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
