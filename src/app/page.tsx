"use client"
import { useState } from "react";

export default function Home() {
  const [focusTime, setFocusTime] = useState(0);
  
  const fetchDailyFocusTime = (e: any) => {
    e.preventDefault;
    setFocusTime(4)
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <button
        onClick={fetchDailyFocusTime}>
        Fetch focus time
      </button>
      {
        focusTime === 0 ? <div></div> : <div>{focusTime} hours focused past 24 hours</div> 
      }
    </main>
  )
}
