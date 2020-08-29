import React, {createContext, useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const CurrentUserContext = createContext(null);

//fetching the current user

const CurrentUserProvider = ({children}) => {
    const {user} = useAuth0();
    const [currentUser, setCurrentUser] =useState(null);
    const [status, setStatus] = useState("loading");
    const [relevantHomeFeed, setRelevantHomeFeed] = React.useState({});

    useEffect(() => {
        fetch("/profile")
        .then((res) => res.json())
        .then((user) => {
            setCurrentUser(user.profile)
            setStatus("idle");
        })
    }, [])
}