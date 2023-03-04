import './index.scss';
import ToggleComponent from './Component/Toggle/Toggle';
import RandomUser1 from './Component/RandomUser-1/RandomUser-1';
import RandomUser2 from './Component/RandomUser-2/RandomUser-2';
import ScrollBar from './Component/ScrollBar/ScrollBar';

function App() {
  return (
    <div>
      <ToggleComponent />
      <RandomUser1 />
      <RandomUser2 />
      <ScrollBar />
    </div>
  );
}

export default App;
