import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    isAuthenticated: boolean;
    token: string | null;
    message: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData extends LoginData {
    first_name: string;
    last_name: string;
}

export interface RootState {
    user: UserState;
}

const initialState = {
  isAuthenticated: false,
  token: null,
  message: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    registerSuccess: (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { loginSuccess, registerSuccess, logout, setMessage } = userSlice.actions;

export default userSlice.reducer;