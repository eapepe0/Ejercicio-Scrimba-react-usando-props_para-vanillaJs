import "./styles.css";
import Joke from "./Joke";

export default function App() {
  return (
    <div>
      <Joke
        setup="Mamá, mamá... En la escuela me dicen mentiroso. "
        punchline="Anda cállate, si hace un año que acabaste la escuela."
      />
      <Joke
        setup=" Mamá, mamá... Que ya no quiero conocer a mi abuelito. "
        punchline="Cállate y sigue escarbando."
      />
      <Joke
        setup="Mamá, mamá... Que ya no me gusta mi hermanito. "
        punchline="Cállate y sigue comiendo."
      />
      <Joke
        setup="Mamá, mamá... ¿Me puedo tirar un pedo como el de ayer? "
        punchline="No, nene. Espera al menos a que se te cierren los puntos."
      />
      <Joke
        setup="Mamá, mamá... Sácame ya del armario, que tengo calor. "
        punchline="Si, claro ¿Estás loco? y que se extienda el fuego."
      />
      <Joke
        setup="- ¿Porque los gallegos ponen una escalera en el mar? 
      para que suba la marea"
        punchline=""
      />
      <Joke
        setup="- Ahorro debería escribirse sin h, para economizar una letra."
        punchline=""
      />
    </div>
  );
}
