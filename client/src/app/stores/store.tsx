import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { catalogAPI } from '../features/catalog/catalogAPI';
import { uiSlices } from '../layout/uiSlices';
import { errorApi } from '../features/about/errorApi';
import { basketApi } from '../features/basket/basketApi';
import { catalogSlice } from '../features/catalog/catalogSlice';


export const store = configureStore({
    reducer: {
        [catalogAPI.reducerPath]: catalogAPI.reducer,
        [errorApi.reducerPath] : errorApi.reducer,
        [basketApi.reducerPath] : basketApi.reducer,
        ui: uiSlices.reducer,
        catalogState: catalogSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(
                catalogAPI.middleware, 
                errorApi.middleware,
                basketApi.middleware
            )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()