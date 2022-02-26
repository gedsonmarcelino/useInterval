export type WaitingTimeState = 'running' | 'idle' | 'reset';

export type WaitingTimeProps = {
  time: number;
  state: WaitingTimeState;
  onChange: (value: WaitingTimeState) => void;
};
