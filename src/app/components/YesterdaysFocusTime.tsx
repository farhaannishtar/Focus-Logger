"use client"
import { useState } from 'react';

const FocusTime: React.FC = () => {
  const [focusTime, setFocusTime] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch('/api/fetchFocusTime');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFocusTime(data.data)
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
      <button 
        onClick={fetchData}
        className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"}
      >
        Fetch Yesterday&apos;s Productive Hours
      </button>
      {
        focusTime && <div>{focusTime}</div>
      }
    </div>
  );
};

export default FocusTime;
