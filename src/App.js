import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTask from './Components/AddTask';
import ViewAllTasks from './Components/ViewAllTasks';

function App() {
  return (
   

<BrowserRouter>
<Routes>
  <Route path="/" element={<AddTask />} />
  <Route path="/ViewAll" element={<ViewAllTasks />} />
</Routes>
</BrowserRouter>

  );
}

export default App;
