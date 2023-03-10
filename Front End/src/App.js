import { useState } from 'react';
import Table from './Table';
import './App.css'
import './Table.css';
import './Create.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Table/>
    </div>
  )
}

export default App