import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import objectivesReducer from "./objectivesSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    objectives: objectivesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
