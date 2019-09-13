import React, { useEffect, useState } from 'react';

export default () => {
  const [time, setTime] = useState(new Date().toISOString());

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date().toISOString());
    }, 100);

    return () => clearTimeout(timeout);
  });

  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>{ time }</h2>
    </div>
  );
}
