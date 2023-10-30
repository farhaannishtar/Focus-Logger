"use client"
import { useState } from 'react';

const FocusTime: React.FC = () => {
  const [focusTime, setFocusTime] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch('/api/proxy');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFocusTime(data.data[0].very_productive_duration_formatted)
      } else {
        console.error('Failed to fetch data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  console.log(focusTime);
  
  return (
    <div>
      <button onClick={fetchData}>Fetch Yesterdays Productive Hours</button>
      {
        focusTime && <div>{focusTime}</div>
      }
    </div>
  );
};

export default FocusTime;
