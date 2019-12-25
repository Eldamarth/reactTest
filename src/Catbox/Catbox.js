import React from 'react';
import './Catbox.css';

const Catbox = ({cat,removeCat,catFace}) => {

    return (
        <div id='cat-box' className = "catbox">
          <img src={catFace} alt="cute cat"/>
        <p id="name">
          {cat.name}
        </p>
        <p id="alignment">
          {cat.alignment}
        </p>
        <button
          onClick={() => removeCat(cat)}
        >
          Remove Cat
        </button>
      </div>
    )

}
export default Catbox; 