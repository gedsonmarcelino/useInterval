# useInterval

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-8radic)

Component which it uses setInterval inside hooks to show waiting time message with states.

States:

- idle
- running
- pause
- reset

```
const [state, setState] = useState<WaitingTimeState>('running')

<WaitingTime
  state={state}
  time={60}
  onChange={(value) => setState(value)}
/>
```
