
import { useState, useEffect } from "react";
import "./Comentario.css";


function Comentario({peli}) {

    const [data, setData] = useState();

    useEffect(() => {

            fetch("https://randommer.io/api/Text/Review?product=%22"+peli+"&quantity=1", {
                method: 'POST',
                headers: {
                  'X-API-Key': 'b2486527d3cd41f8b14569d2dd2b2237',
                 
                }
                
            })
            .then(res => res.json())
            .then(
              (result) => {
                 setData("Comentario de "+peli+": "+result[0]);
                 console.log(result[0]);
              }
            );
        }
      , [peli]);
    
   
   return ( <div className="translate">{data}</div> );
}






export default Comentario;