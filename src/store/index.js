import { configureStore } from '@reduxjs/toolkit'
import accessSlice from './slices/access.slice'
import ApiEcomerceSlice from './slices/ApiEcomerce.slice'
import cartSlice from './slices/cart.slice'
import isLoadingSlice from './slices/isLoading.slice'

export default configureStore({
    reducer: {
        ApiEcomerce: ApiEcomerceSlice,
        access: accessSlice,
        userCart: cartSlice,
        isLoading: isLoadingSlice,
    }
})
