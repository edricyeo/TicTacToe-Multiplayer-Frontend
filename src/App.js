import React, { useState, useEffect } from 'react'
import './App.css';
import GameBoard from './components/GameBoard';
import io from 'socket.io-client';
import JoinRoom from './components/JoinRoom';

const socket = io.connect('https://edric-tictactoe-api.onrender.com');

function App() {
  const [room, setRoom] = useState('');

  useEffect(() => {
    document.title = "Tic Tac Toe";
  }, []);

  const updateRoom = (newRoom) => {
    setRoom(newRoom);
  };

  return (
    <div className="App">
      <JoinRoom serverDetails = {{updateRoom, socket}}/>
      <GameBoard serverDetails = {{room, socket}}/>
    </div>
  );
}

export default App;
