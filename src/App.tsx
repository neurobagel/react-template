import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { MyButton } from './components/MyButton';
import './App.css';

function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  );
}

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <MyButton />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <BasicAlerts />
      <h1 className="bg-red-500 text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className="text-orange-600" />
      </div>
    </>
  );
}

export default App;
