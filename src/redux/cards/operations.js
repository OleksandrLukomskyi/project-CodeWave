import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmUwNjA3MzRjOWFlNjk2OGVlZTgyNCIsImVtYWlsIjoiYW5ueUBnbWFpbC5jb20iLCJpYXQiOjE3MTg0ODY3MjEsImV4cCI6MTcxOTM1MDcyMX0.SSKDFJDnvqkY1tUxZ3azbZWcmWqVC0gLtYSz4KRA4RA';

export const addCard = createAsyncThunk(
  'cards/addCard',
  async (newCard, thunkAPI) => {
    try {
      const response = await axios.post('/api/cards/', newCard, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'cards/updateCard',
  async ({ cardId, editCard }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/cards/${cardId}`, editCard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async (cardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/cards/${cardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
export const moveCard = createAsyncThunk(
  'cards/moveCard',
  async ({ cardId, newCard }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/cards/${cardId}`, newCard);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// export const moveCard = createAsyncThunk(
//   "cards/moveCard",
//   async (_, thunkAPI) => {
//     console.log("hello");
//     try {
//       const response = await axios.get("/api/cards/");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (currentColumn, thunkAPI) => {
    try {
      const response = await axios.get('/api/cards/', {
        params: {
          columnId: currentColumn,
        },
      });
      // return response.data;
      return response.data.cards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
