import { useState } from 'react'
import { Question } from './Components/Question'
import { questions } from './helper/questions'
import '../src/styles/styles.css';

function App() {
  console.log(questions)

  return (
    <>
      <h1>Accordion</h1>
      <div className='container'>
        <h2>Frequently Asked Questions</h2>
        <div className='questions'>
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
