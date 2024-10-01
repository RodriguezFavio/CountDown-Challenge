import Player from './components/Player/Player';
import TimerChallenge from './components/TimerChallenge/TimerChallenge';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Ease" targetTime={1} />
        <TimerChallenge title="Not ease" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
