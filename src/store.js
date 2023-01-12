import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/scoreCounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
