// DATOS
//    un texto de comentario

import { useState, useEffect } from "react";
import "./Comentario.css";
import axios from "../axios";


function Comentario({ fetchUrl }) {

  const [texto, setTexto] = useState();

  // Obtener un dato de text
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.texto);
      setTexto(request.data.texto);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (<div className="comentario"> {texto} </div>);
}






export default Comentario;