import React from 'react'
import './Home.css';
import Quiz from '../img/quiz.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <Link to={`/quiz`}>Iniciar</Link>
        <img src={Quiz} alt="" />
    </div>
  )
}

export default Home