import { useState } from "react"
import { useRef } from 'react'
import { useEffect } from 'react'

 const Counter= ()=>{
    
    const [count, setCount] = useState(0)
    //const prevCountRef = useRef(0);

    /*useEffect(() => {
        prevCountRef.current = count;
      });
*/
    return(
        <div>
            <p> Нажали на кнопку {count} раз
            </p>
           { /*<p>Предыдущее значение: {prevCountRef.current}</p>
           */}
            <button onClick={()=>setCount((prevState)=>prevState+1)}> Nazmi</button>
        </div>
    )
}

export default Counter