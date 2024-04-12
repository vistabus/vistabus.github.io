//header.js
'use client'
import React, { useState, useEffect } from 'react';
export default function Header() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() =>setTime(new Date()),1000);

    return ()=>clearInterval(interval)});

  return (
    <nav suppressHydrationWarning>
      {time.toLocaleTimeString()}
    </nav>
  );
}
