import { Reducer } from 'redux';

interface UserState {
  username: string;
  logged: boolean;
}

interface UserAction {
  type: string;
  username: string;
  logged: boolean;
}

const userReducerDefaultState: UserState = { username: "", logged: false };

const userReducer: Reducer<UserState, UserAction> = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        username: action.username,
        logged: action.logged
      };
    default:
      return state;
  }
};

export default userReducer;
