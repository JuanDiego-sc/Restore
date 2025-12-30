import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { catalogAPI } from '../features/catalog/catalogAPI';
import { uiSlices } from '../layout/uiSlices';


export const store = configureStore({
    reducer: {
        [catalogAPI.reducerPath]: catalogAPI.reducer,
        ui: uiSlices.reducer
    },
    middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(catalogAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()