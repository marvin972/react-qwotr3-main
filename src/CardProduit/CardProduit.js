import React from 'react';
import './CardProduit.css';

export default function CardProduit({image,titre,description,prix,avis}) {
    return (
       <div>     
        <input type="submit"  value="TEST" />
       <figure>
         <img src={image} alt={titre} />
        <figcaption>
        <h3>{titre}</h3>
        <p>{description}</p>
        <h4>{prix}</h4>
        <h5>{avis}</h5>
     </figcaption>
   </figure>

   </div>
       )
}