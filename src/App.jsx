import './App.css'
import {
  Tab,
  longestWord,
  occurrenceInput,
  occurrenceOutput,
  sampleWords,
  searchId,
  searchResult,
  students,
  totalMarks,
} from './Ecmascript/es6.js'

function App() {
  const format = (value) => JSON.stringify(value, null, 2)

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Partie 2 - ES6</p>
        <h1>EcmaScript Workshop</h1>
        <p className="subtitle">
          Exercices resolus avec la syntaxe ES6 (map, reduce, filter, flat).
        </p>
      </header>

      <main className="stack">
        <section className="panel">
          <div className="panel-header">
            <h2>Exercice 1</h2>
            <span>findLongestWord</span>
          </div>
          <div className="panel-grid">
            <div>
              <h3>Input</h3>
              <pre>{format(sampleWords)}</pre>
            </div>
            <div>
              <h3>Output</h3>
              <pre>{format(longestWord)}</pre>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2>Exercice 2</h2>
            <span>Occurrences dans un tableau</span>
          </div>
          <div className="panel-grid">
            <div>
              <h3>Input</h3>
              <pre>{format(occurrenceInput)}</pre>
            </div>
            <div>
              <h3>Output</h3>
              <pre>{format(occurrenceOutput)}</pre>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2>Exercice 3</h2>
            <span>Total des notes</span>
          </div>
          <div className="panel-grid">
            <div>
              <h3>Input</h3>
              <pre>{format(students)}</pre>
            </div>
            <div>
              <h3>Output</h3>
              <pre>{format(totalMarks)}</pre>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2>Exercice 4</h2>
            <span>Tableau Tab + Search</span>
          </div>
          <div className="panel-grid">
            <div>
              <h3>Tab</h3>
              <pre>{format(Tab)}</pre>
            </div>
            <div>
              <h3>Search</h3>
              <pre>{format({ searchId, result: searchResult })}</pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
