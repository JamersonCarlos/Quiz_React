import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import './Questions.css';
import { useFetchQuestion } from '../hooks/useFetchQuestion';

function Questions() {
  const {category} = useParams();
  const [count, setCount] = useState(1);
  const {questions, loading} = useFetchQuestion("questions", category);
  return (
    <div className='questions'>
      <p>Pergunta {count} de 3</p>
      <h2>{questions && questions[count - 1].question}</h2>
      {questions && questions[count - 1].responses.map((question) => (
        <div className='options'>
          <p>{question.response}</p>
        </div>
      ))}
      {!loading && (
        <button onClick={() => setCount(count + 1)} className='responseQuestion'>
            Responder
        </button>
      )}
    </div>
  )
}

export default Questions