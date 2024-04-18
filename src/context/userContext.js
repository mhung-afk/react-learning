import { createContext, useContext } from "react";

const UserContext = createContext(undefined)
export default UserContext

export const useUserContext = () => {
    const data = useContext(UserContext)
    if (data === undefined) {
        throw new Error('useUserContext is called outside of UserContextProvider')
    }
    return data
}