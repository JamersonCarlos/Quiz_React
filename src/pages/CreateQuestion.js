import React from 'react';
import './CreateQuestion.css';
import { useState } from 'react';
import { useInsertQuestion } from '../hooks/useInsertQuestion';

function CreateQuestion() {
    const [question, setQuestion] = useState("");
    const [response1, setResponse1] = useState("");
    const [response2, setResponse2] = useState("");
    const [response3, setResponse3] = useState("");
    const [correctQuestion, setCorrectQuestion] = useState(1);
    const [category, setCategory] = useState("html");
    const [formError, setFormError] = useState("");
    const {insertQuestion, response} = useInsertQuestion("questions");
    
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        setFormError("");
    
        if(!question || !response1 || !response2 || !response3) { 
            return setFormError("Preencha todos os campos!!");
        }
        
        const data = { 
            question, 
            responses: [{id: 1, response: response1}, {id: 2, response: response2}, {id: 3, response: response3}],
            correctQuestion, 
            category, 
        }

        insertQuestion(data);

        //Reset values
        setQuestion("");
        setResponse1("");
        setResponse2("");
        setResponse3("");
        setCorrectQuestion(1);
        setCategory("html");
    }

  return (
    <div className='cardMain'>
        <h1>Nova Pergunta</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
                <span>Pergunta</span>
                <input type="text" name='question'  value={question} onChange={(e) => setQuestion(e.target.value)}/>
            </label>
            <label htmlFor="">
                <span>Resposta 1</span>
                <input type="text" name='question'  value={response1} onChange={(e) => setResponse1(e.target.value)}/>
            </label>
            <label htmlFor="">
                <span>Resposta 2</span>
                <input type="text" name='question' value={response2} onChange={(e) => setResponse2(e.target.value)}/>
            </label>
            <label htmlFor="">
                <span>Resposta 3</span>
                <input type="text" name='question'  value={response3} onChange={(e) => setResponse3(e.target.value)}/>
            </label>
            
            <label htmlFor="">
                <span>Categoria</span>
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                </select>
            </label>
            <label htmlFor="">
                <span>Resposta Correta</span>
                <select name="CorrectQuestion" value={correctQuestion} onChange={(e) => setCorrectQuestion(e.target.value)} >
                    <option value="1">Resposta 1</option>
                    <option value="2">Resposta 2</option>
                    <option value="3">Resposta 3</option>
                </select>
            </label>
            <button type='submit'>
                Adicionar
            </button>
            {formError && (
                <p className='error'>{formError}</p>
            )}
        </form>
    </div>
  )
}

export default CreateQuestion