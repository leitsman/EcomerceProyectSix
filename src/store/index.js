import { configureStore } from '@reduxjs/toolkit'
import ApiEcomerceSlice from './slices/ApiEcomerce'

export default configureStore({
    reducer: {
        ApiEcomerce: ApiEcomerceSlice
    }
})
