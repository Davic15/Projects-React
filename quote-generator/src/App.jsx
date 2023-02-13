import { useEffect, useState } from 'react'
import './styles/styles.css';

function App() {
  const getRandomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    const request = await fetch('https://type.fit/api/quotes');
    const data = await request.json();
    setQuotes(data)
    setQuote(data[0]);
  }

  const getNewQuote = () => {
    setQuote(getRandomQuote(quotes))
  }

  return (
    <main>
      <h1>Quote Generator</h1>
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h3><span>"</span>{quote?.text}</h3>
        <i>- {quote?.author}</i>
      </section>
    </main>
  )
}

export default App
