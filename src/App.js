import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsList from './components/ContactsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactsList />
      </header>
    </div>
  );
}

export default App;
