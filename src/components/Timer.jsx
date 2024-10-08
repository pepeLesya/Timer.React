import React,{useState,useRef,useEffect} from "react";

const Timer = () =>{
    const calculateTimeLeft = () =>{
        const now = new Date()
        //получаем сегодняшнею дату прибавляем 1 и устанавливаем счетчик времени на 0 
        const tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1, 0,0,0)
        const difference = tomorrow - now;

        let timeLeft = {}; 

        if (difference>0){
            timeLeft ={
                hours: Math.floor(difference / (1000 * 60 * 60)),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }
        return timeLeft
    }
    //console.log(calculateTimeLeft())
    const [timeLeft,setTimeLeft] = useState(calculateTimeLeft())

     useEffect (()=>{
        const timer = setInterval(()=>{
            setTimeLeft(calculateTimeLeft())
        
        },1000)

        return () => clearInterval(timer); 
     },[])

     return (
        <div>
          <h1>Обратный отсчет до полуночи:</h1>
          <div>
            <span>{timeLeft.hours || '0'} часов </span>
            <span>{timeLeft.minutes || '0'} минут </span>
            <span>{timeLeft.seconds || '0'} секунд</span>
          </div>
        </div>
     )
};



export default Timer