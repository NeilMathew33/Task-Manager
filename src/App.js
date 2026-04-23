import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTask from './Components/AddTask';
import ViewAllTasks from './Components/ViewAllTasks';
import Login from './Components/Login';
import SignUp from './Components/Signup';

function App() {
  return (
   

<BrowserRouter>
<Routes>
  <Route path="/Add" element={<AddTask />} />
  <Route path="/ViewAll" element={<ViewAllTasks />} />
  <Route path="/" element={<Login />} />
  <Route path="/SignUp" element={<SignUp />} />
</Routes>
</BrowserRouter>

  );
}

export default App;
