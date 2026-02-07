import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from '../features/contacts/contactsSlice'
import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
})
