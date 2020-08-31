import React, { createContext, useReducer, useEffect } from "react";

export const GlobalContext = createContext();

const initialState = {
  currentUser: null,
  users: [],
};

const ACTIONS = {
	SET_CURRENT_USER: 'set-current-user',
	SET_ALL_USERS: 'set-all-users'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_USER:
			return {...state, currentUser: action.payload.user};
		case ACTIONS.SET_ALL_USERS:
			return {...state, users: action.payload.users}
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetch('/users')
			.then(res => res.json())
			.then(users  => addAllUsers(users))
	}, [])

	// set current user dispatch function

	const setCurrentUser = (user) => {
		dispatch({type: ACTIONS.SET_CURRENT_USER, payload:{user}})
	}

	const addUser = (user) => {
		dispatch({type: ACTIONS.SET_CURRENT_USER, payload: {user}})
	}

	const addAllUsers = users => {
		dispatch({ type: ACTIONS.SET_ALL_USERS, payload: {users}})
	} 

	// add set current user function to array
	const actions = [addUser, addAllUsers]

	// console.log('state', state)

  return (
    <GlobalContext.Provider value={{state, actions, setCurrentUser}}>
      {children}
    </GlobalContext.Provider>
  );
};
