import React, { useState, useEffect } from 'react';
import './JoinRoom.css';

const JoinRoom = (props) => {
    const {updateRoom, socket } = props.serverDetails;
    const [inputVal, setInputVal] = useState('');

    const handleClick = () => {
        if (inputVal !== "") {
            updateRoom(inputVal);
            socket.emit("join_room", inputVal);
            setInputVal('');
        }
    };

    return (
        <div className = "join-room" aria-label = 'Component to allow players to join the same room'>
            <input 
            type = "text" 
            placeholder = 'Room Number'
            aria-label='An input field for the Room Number'
            value = {inputVal}
            onChange={(event) => setInputVal(event.target.value)}/>
            <button className="join-room-button" onClick={handleClick}> Join Room </button>
      </div>
    );
};

export default JoinRoom;