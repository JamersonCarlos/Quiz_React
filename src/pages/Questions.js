import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import './Questions.css';
import { useFetchQuestion } from '../hooks/useFetchQuestion';
import { Link } from 'react-router-dom';

function Questions() {
  const {category} = useParams();
  const [count, setCount] = useState(1);
  const {questions, loading} = useFetchQuestion("questions", category);
  const [selectQuestion, setSelect] = useState(0);
  const [correctQuestion, setCorrect] = useState(0);
  const [scoreQuestions, setScore] = useState(0);

  const responseQuestion = async () => { 
    if(parseInt(questions[count -1].correctQuestion) === selectQuestion){
      setScore(scoreQuestions + 1);
      await sleep(3000);
    } else { 
      setCorrect(parseInt(questions[count -1].correctQuestion)); 
      await sleep(3000);
    }
    setSelect(0);
    setCorrect(0);
  
    setCount(count + 1);
  }

  const markQuestion = (id) => { 
    if (id === selectQuestion ){ 
      return 'select';
    } else { 
      return 'options';
    }
  }

  const markIncorrectQuestion = (id) => { 
    if (id === correctQuestion) { 
      return 'correct';
    } else { 
      return 'options';
    }
  }

  function sleep(milliseconds) {  
      return new Promise(resolve => setTimeout(resolve, milliseconds));  
  }  
  
  return (
    <div className='questions'>
      {count <= 3 ? (
        <>
          <p>Pergunta {count} de 3</p>
          <h2>{questions && questions[count - 1].question}</h2>
          {questions && questions[count - 1].responses.map((question) => (
            <div key={question.response} className={correctQuestion ?  markIncorrectQuestion(question.id) : markQuestion(question.id)} onClick={() => setSelect(question.id)}>
              <p key={question.id}>{question.response}</p>
            </div>
          ))}
          {!loading && (
            <button onClick={responseQuestion} className='responseQuestion' disabled={selectQuestion ? false : true}>
                Responder
            </button>
          )}
        </>
      ) : (
        <>
          <div>
            <h1>Você acertou</h1>
            <p className='percent'>{`${(scoreQuestions / 3).toFixed(4) * 100}%`}</p>
            <h1>das questões</h1>
            <Link to={`/`} className='replay'>Jogar Novamente!</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Questions