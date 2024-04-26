import { createContext, useContext } from "react";
const ScoreboardContext = createContext(undefined)

export default ScoreboardContext

export const useScoreboardContext = () => {
    const data = useContext(ScoreboardContext)
    if (data === undefined) {
        throw new Error('useScoreboardContext is called outside of UserContextProvider')
    }
    return data
}