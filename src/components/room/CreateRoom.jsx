import React from "react";
import Header from "../common/Header";

const CreateRoom = (props) => {
    const create = async (e) => {
        e.preventDefault();

        const resp = await fetch("http://192.168.55.131:8000/create");
        const { room_id } = await resp.json();

		props.history.push(`/room/${room_id}`)
    };

    return (
        <div>
            <Header/>
            <button onClick={create}>Create Room</button>
        </div>
    );
};

export default CreateRoom;
