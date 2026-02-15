import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Component1} from './Component1.jsx' // Importing the new component sans le mettre entre {} car c'est un export par défaut va dans component1.jsx tu vas voir export default function component1()
import ClassComponent from './ClassComponent.jsx' // Importing the class component
import UpdateComponent  from './UpdateComponent.jsx'
import Component from './Component.jsx'
import ColorBox from './ColorBox.jsx'
import NotesManager from './NotesManager.jsx'
import ComponentExProps from './ComponentExProps.jsx'
import TodoList from './TodoList.jsx'
import Events from './components/Events.jsx'
function App() {
  var a=5;
  var initialCount= 0;
  var step =1;

  
  //EX2
  var initialItems = ['React ', 'Angular', 'VueJs'];
  var placeHolder= "Entrer un nouveau element";
  const [count, setCount] = useState(0) // useState hook pour gérer l'état local du composavar nt et modifier la valeur de count
  //EX3
  var initialColor = '#ff6347';
  var    colorOptions = ["#ff6347", "#36f", "#39ff14", "#ffd700"]; 
  
  //EX5
   const initialTasks = [
    { name: "Finir le projet React", priority: "Haute", completed: false },
    { name: "Préparer le repas", priority: "Moyenne", completed: false },
    { name: "Aller courir", priority: "Basse", completed: false },
  ];
  // useEffect hook pour gérer les effets de bord dans les composants fonctionnels React. Il permet d'exécuter du code après le rendu du composant,
  //  similaire aux méthodes de cycle de vie dans les composants de classe.

  return (
    <>
      <div>
        
        {/* <Component name ="MyComponent" 
        description="This is a sample component description." 
        variable={a} 
        initialCount={initialCount}
        step={step}
        link="https://esprit.tn" /> */} {/* hedha lcomposant parent be9yn nabe3thou fy des données mil parent elly howa app.jsx l child elly howa component.jsx   */}
         {/* EX2 */}
         {/*  <ComponentExProps  initialItems={initialItems}
          placeHolder={placeHolder}
          /> */}
          {/* EX3 */}
         {/*  <div style={{ marginTop: 20 }}>
            <h2>Exercice ColorBox</h2>
            <ColorBox initialColor={initialColor} colorOptions={colorOptions} />
            
          </div> */}
          {/* EX4 */}
           {/* <NotesManager initialNotes={[12, 15, 18]} /> */}
           
          {/*  <TodoList initialTasks={initialTasks} />;
        */}
         {
         /*
         
        <Component1 /> 
        <ClassComponent /> 
        <UpdateComponent /> */ } 

        <Events  />
      </div>
    </>
  )
}

export default App
