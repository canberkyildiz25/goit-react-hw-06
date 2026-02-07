import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../features/contacts/contactsSlice'

const normalize = (value) => value.trim().toLowerCase()

function ContactList() {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.items)
  const filterValue = useSelector((state) => state.filters.name)

  const visibleContacts = contacts.filter((contact) =>
    normalize(contact.name).includes(normalize(filterValue))
  )

  if (!visibleContacts.length) {
    return (
      <div className="empty-state">
        Gosterilecek kisi bulunamadi.
      </div>
    )
  }

  return (
    <div className="contact-list">
      {visibleContacts.map((contact) => (
        <div className="contact-card" key={contact.id}>
          <div className="contact-card__info">
            <span className="contact-card__name">{contact.name}</span>
            <span className="contact-card__phone">{contact.phone}</span>
          </div>
          <button
            className="button button--ghost"
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Sil
          </button>
        </div>
      ))}
    </div>
  )
}

export default ContactList
