import React from "react";
import { useState } from "react";

import './Contact.css';

function Contact() {

  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextera] = useState("Saisisez votre commentaire.");
  const [jour, setJour] = useState("Lundi");

  const handleJour = (event) => {
    setJour(event.target.value);
  }

  console.log("jours semaine :" , jour)

  const handleChange = (event) => {
    setTextera(event.target.value);
  }

  console.log("textarea : ", textarea);

  const validation = (event) => {
    event.preventDefault();
    alert(`Vous etes : ${prenom} ${name} , votre email : ${email} , votre message : ${textarea} , le jour de la semaine est  : ${jour}` );
  };

  console.log("name : ", name);
  console.log("prenom : ", prenom);
  console.log("email : ", email);

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={validation}>
        <label>
          Nom : 
          <input 
          type="text" 
          value={name} 
          onChange={(element) => setName(element.target.value)} required />
        </label>
        <label>
          Prenom : 
          <input 
          type="text" 
          value={prenom} 
          onChange={(element) => setPrenom(element.target.value)} required />
        </label>
        <label>
          Email : 
          <input 
          type="email" 
          value={email} 
          onChange={(element) => setEmail(element.target.value)} required />
        </label>
        <label>
          Jours de la semaine :
        <select value={jour} onChange={handleJour}>
          <option value="Lundi">Lundi</option>
          <option value="Mardi">Mardi</option>
          <option value="Mercredi">Mercredi</option>
          <option value="Jeudi">Jeudi</option>
          <option value="Vendredi">Vendredi</option>
          <option value="Samedi">Samedi</option>
          <option value="Dimanche">Dimanche</option>
        </select>
        </label>
        <textarea value={textarea} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Contact;
