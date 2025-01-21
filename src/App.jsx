import './App.css';
import { Input, Output } from './components/index';

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-800'>
      <div className='bg-gray-900 p-4 rounded-lg shadow-lg'>
        <Output/>
        <Input/>
      </div>
    </div>
  )
}

export default App
