import React from 'react';
import './components/inputs.css';
import './App.css';
import MainScreen from './components/mainScreen';
import TaskProvider from './context/taskProvider';

function App() {
  return (
    <div>
      <TaskProvider>
       <MainScreen />
      </TaskProvider>
    </div>
  );
}

export default App;
