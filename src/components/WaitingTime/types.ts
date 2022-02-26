export type WaitingTimeState = 'running' | 'idle' | 'reset' | 'pause';

export type WaitingTimeProps = {
  time: number;
  state: WaitingTimeState;
  onChange: (value: WaitingTimeState) => void;
};
