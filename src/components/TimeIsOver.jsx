import React,{useState,useRef,useEffect} from "react";

const TimeIsOver = () =>{
    const [minutes,setMinutes] = useState(5)
    const [seconds,setSeconds] = useState(0)
    const [isRunning,setIsRunning] = useState(false)

    useEffect(()=>{
        let interval = null

        if (isRunning === true){
              interval = setInterval(()=>{
                if (seconds===0){
                    if (minutes>0){
                        setMinutes((prevMinutes)=>prevMinutes-1)
                        setSeconds(59);
                } else {
                    // Если нет минут и секунд, останавливаем таймер
                    setIsRunning(false);
                }
            } else {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }
        }, 1000);
            
        } else if (!isRunning && seconds !== 0) {Ф
            clearInterval(interval);
        }
    

        return () => clearInterval(interval);
    }, [isRunning, seconds, minutes]);


return (
    <div>
      <h1>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
      <button onClick={() => setIsRunning(true)}>Старт</button>
      <button onClick={() => setIsRunning(false)}>Пауза</button>
      <button
        onClick={() => {
          setMinutes(5);
          setSeconds(0);
          setIsRunning(false);
        }}
      >
        Сброс
      </button>
    </div> 
  )

}

export default TimeIsOver