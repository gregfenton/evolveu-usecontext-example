import {MySampleProvider} from './components/MySampleProvider';
import ShowValuesPage from './components/ShowValuesPage';

function App() {
  return (
    <MySampleProvider>
      <ShowValuesPage />
    </MySampleProvider>
  );
}

export default App;
