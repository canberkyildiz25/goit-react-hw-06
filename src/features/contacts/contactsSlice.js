import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 'id-1', name: 'Ada Lovelace', phone: '+44 20 7946 0958' },
    { id: 'id-2', name: 'Alan Turing', phone: '+44 20 7946 0959' },
    { id: 'id-3', name: 'Grace Hopper', phone: '+1 212 555 0199' },
  ],
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload)
      },
      prepare({ name, phone }) {
        return {
          payload: {
            id: nanoid(),
            name,
            phone,
          },
        }
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addContact, deleteContact } = contactsSlice.actions
export default contactsSlice.reducer
