import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  queries: [],
  result: null, 
  error: null,
};


const generateMockData = (query) => {
  const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  return {
    labels: categories,
    datasets: [
      {
        label: query,
        data: categories.map(() => Math.floor(Math.random() * 100) + 10),
        backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 0.6)`, 
        borderColor: "rgba(0, 0, 0, 0.6)",
        borderWidth: 2,
      },
    ],
  };
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    
    addQuery: (state, action) => {
      const newQuery = action.payload;
      state.queries.unshift(newQuery);
      state.result = generateMockData(newQuery);
    },

    removeQuery: (state, action) => {
        state.queries.splice(action.payload, 1); 
      },
   
    submitQuery: (state) => {
      state.loading = true;
      state.error = null;
    },

    querySuccess: (state, action) => {
      state.loading = false;
      const newQuery = action.payload;
      state.queries.unshift(newQuery);
      state.result = generateMockData(newQuery); 
    },

    queryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addQuery, removeQuery, submitQuery, querySuccess, queryFailure } = querySlice.actions;
export default querySlice.reducer;
