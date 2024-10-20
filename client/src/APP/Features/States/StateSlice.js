import { createSlice } from "@reduxjs/toolkit";
import { Statearr } from "../../../Data";
export const StateSlice = createSlice({
  name : "StateData",
  initialState :{ value:Statearr[0] },
  reducers: {
    updateState : (state , action) => {
      const newState = Statearr.filter((x) => x.name == action.payload)
      state.value = newState[0]
      
    }
  }
});

export const {updateState} = StateSlice.actions;
export default StateSlice.reducer;