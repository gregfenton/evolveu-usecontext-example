import {MySampleProvider} from './components/MySampleProvider';
import ShowTheValueZone from './components/ShowTheValueZone';
import ChangeTheValueZone from './components/ChangeTheValueZone';

function App() {
  return (
    <MySampleProvider>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ChangeTheValueZone />
        <ShowTheValueZone />
      </div>
    </MySampleProvider>
  );
}

export default App;
