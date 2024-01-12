import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PhotoState {
  uploadedPhoto: string[] | null;
}

const initialState: PhotoState = {
  uploadedPhoto: null,
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setUploadedPhoto: (state, action: PayloadAction<string[] | null>) => {
      state.uploadedPhoto = action.payload;
    },
  },
});

export const { setUploadedPhoto } = photoSlice.actions;
export default photoSlice.reducer;
