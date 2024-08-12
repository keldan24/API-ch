import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UserList from './UserList';
import UserDetail from './UserDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
