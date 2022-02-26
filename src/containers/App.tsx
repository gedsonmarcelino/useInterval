import { useState } from 'react';
import { WaitingTime } from '../components/WaitingTime';
import { WaitingTimeState } from '../components/WaitingTime/types';

function App() {
  const [state, setState] = useState<WaitingTimeState>('idle');

  return (
    <div className="App">
      <h1>useInterval</h1>

      <WaitingTime
        state={state}
        time={60}
        onChange={(value) => setState(value)}
      />

      <button onClick={() => setState('running')}>Play</button>
      <button onClick={() => setState('pause')}>Pause</button>
      <button onClick={() => setState('reset')}>Reset</button>
    </div>
  );
}

export default App;
