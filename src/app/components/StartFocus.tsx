"use client"
import { useState } from "react";

const StartFocus: React.FC = () => {
  const [focusTime, setFocusTime] = useState<string>('');

  async function startFocusTime() {
    try {
      const response = await fetch('/api/triggerFocusSessionStart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key: `${process.env.NEXT_PUBLIC_RESCUE_TIME_API_KEY}`,
          duration: focusTime,
        })
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log('FocusTime started:', data);
      } else {
        const errorData = await response.json();
        console.log('Error:', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.code === "Enter") {
      startFocusTime(); 
      setFocusTime("Focus session started :)")   
    }
  };

  return (
    <div className="flex flex-col items-start mt-20">
      <label htmlFor="focusTime" className="text-lg mb-2">
        Enter how long you want to focus:
      </label>
      <input
        id="focusTime"
        name="focusTime"
        type="text"
        placeholder="Focus Time in minutes"
        value={focusTime}
        onChange={(e) => setFocusTime(e.target.value)}
        onKeyDown={handleKeyDown}
        className="text-black px-4 py-2 border rounded-md"
      />
    </div>
  )
}

export default StartFocus;