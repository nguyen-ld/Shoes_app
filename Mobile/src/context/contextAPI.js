import {createContext, useState} from 'react';

const context = createContext();

function UserProvider({children}) {
    const [userId, setUserId] = useState(null);
    return (
        <context.Provider value={{userId, setUserId}}>
            {children}
        </context.Provider>
    );
}
export {context};
export default UserProvider;
