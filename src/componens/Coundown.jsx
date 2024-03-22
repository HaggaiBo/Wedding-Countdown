import React, { useEffect, useState } from 'react'


export default function Coundown() {
    const weddingDate = new Date(2024, 5, 23);
    const now = new Date()
    const [countDown, setCountDown] = useState(weddingDate - now)

    const getReturnValues = (countDown) => {
        // calculate time left
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
      
        return [days, hours, minutes, seconds];
      };
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(weddingDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [weddingDate]);

    return getReturnValues(countDown);
};




// console.log("days: ",days);
// console.log("hours: ",hours);
// console.log("minutes: ",minutes);
// console.log("seconds: ",seconds);

