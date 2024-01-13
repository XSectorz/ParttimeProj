import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PhotoState {
  uploadedPhoto: string[] | null;
  categoriesPhoto: string[] | null;
}

const initialState: PhotoState = {
  uploadedPhoto: null,
  categoriesPhoto: null,
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setUploadedPhoto: (state, action: PayloadAction<string[] | null>) => {
      state.uploadedPhoto = action.payload;
    },
    setCategoriesPhoto: (state, action: PayloadAction<string[] | null>) => {
      state.categoriesPhoto = action.payload;
    },
  },
});

export const { setUploadedPhoto , setCategoriesPhoto} = photoSlice.actions;
export default photoSlice.reducer;
