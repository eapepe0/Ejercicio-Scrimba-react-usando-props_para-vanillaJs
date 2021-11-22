import React from "react";

export default function Joke(props) {
  return (
    <div className="joke">
      <div className="bubble bubble-bottom-left">{props.setup}</div>
      <br />
      {props.punchline && (
        <div className="contenedor-broma--derecha">
          <div className="bubble bubble-bottom-right">{props.punchline}</div>
        </div>
      )}
      {/* si punchline tiene algo , renderizar  todo lo que este en parentesis  
      en este caso, al ser un chiste sin remate, 
      no renderiza : 
      contenedor broma derecha (mantiene el globo a la derecha)
      globo o burbuja a la derecha (globo donde se escribe )
      */}
      {/* div style={{display: props.punchline ? "block" : "none"}}  
          si props tiene algo display como block sino
          display none , estaria escondido
      */}
      <br /> {/* le da separacion a los globitos */}
      <br />
      <hr />
      <br /> {/* le da separacion a los globitos */}
      <br />
    </div>
  );
}
