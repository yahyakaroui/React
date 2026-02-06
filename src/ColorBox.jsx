import React, { useState } from 'react'

export default function ColorBox(props) {
  const [color, setColor] = useState(props.initialColor || '#ff6347')

  

// Générer une couleur aléatoire
  const changeColor = () => {
    if (props.colorOptions && props.colorOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * props.colorOptions.length);
      setColor(props.colorOptions[randomIndex]);
    } else {
      // couleur hex aléatoire
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    }
  };
  

  return (
    <>
  <div style={{ textAlign: "center", margin: "20px" }}>
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: color,
          margin: "0 auto 10px",
          border: "1px solid #000",
        }}
      ></div>

      <button onClick={changeColor}>
        Changer de couleur
      </button>
    </div>
    </>
  )
}
