import { Session } from "@supabase/supabase-js";
import { createContext, useState } from "react";

export const UserContext = createContext({
    session: {},
    setUserSession: (session : Session) => {},
    userTag: '',
    setUserTagToContext: (userTag: string) => {}
})


export const UserProvider = ({children}: any) => {
    const [session, setSession] = useState({})
    const [userTag, setUserTag] = useState("")

    const setUserTagToContext = (userTag) => {
        setUserTag(userTag)
    }

    const setUserSession = (session: Object) => {
        setSession(session)
    }
    return (
        <UserContext.Provider
            value={{session, setUserSession, userTag, setUserTagToContext}}
        >
            {children}
        </UserContext.Provider>
    )
}