import React, { useState, useEffect } from 'react';

import { useInterval } from '../../hooks/useInterval';
import { WaitingTimeProps } from './types';

export function WaitingTime({
  time = 60,
  state = 'running',
  onChange,
}: WaitingTimeProps) {
  const [count, setCount] = useState(time);

  const animatedDots = () => {
    return '...'.substring(count % 3, 3);
  };

  useInterval(
    () => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
      if (count === 0) onChange('idle');
    },
    state === 'running' ? 1000 : null
  );

  useEffect(() => {
    if (state === 'reset') {
      setCount(time);
      onChange('running');
    }
  }, [state]);

  return (
    <div>
      <p>State: {state}</p>
      <p>
        Waiting{animatedDots()} {count} seconds
      </p>
    </div>
  );
}
