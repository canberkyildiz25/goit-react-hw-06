import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../features/contacts/contactsSlice'

const normalize = (value) => value.trim().toLowerCase()

function ContactForm() {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.items)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const isDuplicate = useMemo(() => {
    if (!name.trim()) {
      return false
    }
    return contacts.some((contact) => normalize(contact.name) === normalize(name))
  }, [contacts, name])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name.trim() || !phone.trim()) {
      setError('Lutfen tum alanlari doldurun.')
      return
    }

    if (isDuplicate) {
      setError('Bu kisi zaten kayitli.')
      return
    }

    dispatch(addContact({ name: name.trim(), phone: phone.trim() }))
    setName('')
    setPhone('')
    setError('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <label htmlFor="name">Isim</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Ornek: Ada Lovelace"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form__field">
        <label htmlFor="phone">Telefon</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Ornek: +90 555 123 4567"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>

      <div className="form__actions">
        <button className="button" type="submit">
          Kaydet
        </button>
        <button
          className="button button--ghost"
          type="button"
          onClick={() => {
            setName('')
            setPhone('')
            setError('')
          }}
        >
          Temizle
        </button>
      </div>

      {error ? <div className="notice">{error}</div> : null}
    </form>
  )
}

export default ContactForm
