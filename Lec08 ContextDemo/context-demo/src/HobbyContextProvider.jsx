import { createContext, useState } from "react";

import { v4 as uuidv4 } from 'uuid';

export const HobbyContext = createContext();

export default function HobbyContextProvider(props) {
    const [hobbies, setHobbies] = useState([{ id: 1, name: 'play', times: 3 }, { id: 2, name: 'jump', times: 2 }]);

    const AddHobby = (name, times) => {
        let newHobs = [...hobbies, { id: uuidv4(), name, times }];
        setHobbies(newHobs);
    }

    const RemoveHobby = (id) => {
        setHobbies(hobbies.filter(hob => hob.id !== id));
    }

    return (
        <HobbyContext.Provider value={{ hobbies, AddHobby, RemoveHobby }}>
            {props.children}
        </HobbyContext.Provider>
    )
}
