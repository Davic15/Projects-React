import { useState } from 'react';
import { Form } from './Components/Form';
import { User } from './Components/User';
import './styles/styles.css';

function App() {
  const API_URL = "https://api.github.com";
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onSearchChange = (e) => {
    setQuery(e.target.value);
  }

  const onSearchSubmit = async(e) => {
    e.preventDefault();
    const results = await fetchResults(query);
    setResults(results)
  }

  const fetchResults = async(query) => {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const json = await response.json();
      return json.items || [];
    } catch (e) {
      throw new Error(e)
    }
  }

  return (
    <div className="app">
      <main className='main'>
        <h2>Github User Search</h2>
        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />
        <h3>Result</h3>
        <div id='results'>
          <div>
            {results.map((user) => (
              <User 
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
