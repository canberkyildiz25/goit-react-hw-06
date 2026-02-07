import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="hero__eyebrow">Redux Toolkit</p>
        <h1 className="hero__title">Iletisim Kitabi</h1>
        <p className="hero__subtitle">
          Favori kisilerini hizlica ekle, ara ve duzenle.
        </p>
      </header>

      <main className="grid">
        <section className="panel panel--accent">
          <h2>Yeni Kisi</h2>
          <ContactForm />
        </section>

        <section className="panel">
          <div className="panel__header">
            <h2>Kisiler</h2>
            <Filter />
          </div>
          <ContactList />
        </section>
      </main>
    </div>
  )
}

export default App
