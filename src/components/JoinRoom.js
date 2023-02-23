import React, { useState, useEffect } from 'react';
import './JoinRoom.css';

const JoinRoom = (props) => {
    const {updateRoom, socket } = props.serverDetails;
    const [inputVal, setInputVal] = useState('');
    const [roomStatus, setRoomStatus] = useState('Enter a room number to join a game room');

    // Receiving information from the server
    useEffect( () => {
        socket.on("status_message", (stat) => {
            setRoomStatus(stat);
        });
    });
    
    /**
     * Save inputted room and reset input field when 'Join Room' is clicked.
     */
    const handleClick = () => {
        if (inputVal !== "") {
            updateRoom(inputVal);
            socket.emit("join_room", inputVal);
            setInputVal('');
        }
    };

    /**
     * Save inputted room and reset input field when 'Enter' is pressed.
     */
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && inputVal !== "") {
            updateRoom(inputVal);
            socket.emit("join_room", inputVal);
            setInputVal('');
        }
    }

    return (
        <div aria-label = 'Component to allow players to join the same room'>
            <header aria-live = "polite" className = "room-status">{roomStatus}</header>
            <div className = "join-room">
                <input 
                type = "text" 
                aria-label='An input field for the Room Number'
                value = {inputVal}
                onChange={(event) => setInputVal(event.target.value)}
                onKeyDown = {handleKeyDown}/>
                <button className="join-room-button" onClick={handleClick}> Join Room </button>
            </div>
            
      </div>
    );
};

export default JoinRoom;