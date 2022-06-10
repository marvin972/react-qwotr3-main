import React from 'react';
import './Emoji.css';

//declarer la fonction fleche montrerEmoji
// const montrerEmoji = event => alert(event.target.id);

// export default function Emoji() {
//     return (
//         <ul>
//             <li>
//                 <button onClick={event => alert(event.target.id)}>
//                 <span role="img" id="sourire">😀</span>
//                 </button>
//             </li>
//             <li>
//                 <button onClick={montrerEmoji}>
//                 <span role="img" id="animal">🦊</span>
//                 </button>
//             </li>
//             <li>
//                 <button>
//                 <span role="img" id="nourriture">🍉</span>
//                 </button>
//             </li>
//         </ul>
//     )
// };

const montrerEmoji = event => alert(event.target.id);

const emojis = [
    {
        emoji: "😀",
        name: "sourire"
    },
    {
        emoji: "🦊",
        name: "animal"
    },
    {
        emoji: "🍉",
        name: "nourriture"
    },
];

// const planetes = [
//     "Terre",
//     "Saturne",
//     "Pluton"
// ];

// export default function Emoji() {
//     return(
//         <>
//             {planetes.map(planete => <div key={planete}>{planete}</div>)}
//         </>
//     )
// }

export default function Emoji() {
    return (
        <>
            <ul>
                {
                    emojis.map(emoji => (
                        <li key={emoji.emoji}>
                            <button onClick={montrerEmoji}>
                                <span id={emoji.name}>{emoji.emoji}</span>
                            </button>
                        </li>
                    ))
                }
            </ul>
   
        </>
    )
}
