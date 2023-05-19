import React from 'react'
import './Quiz.css';
import { Link } from 'react-router-dom';
import Category from '../img/category.svg'

function Quiz() {
  return (
    <div className='quiz'>
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das categorias abaixo</p>
        <Link to={`/quiz/${"html"}`} className={`btn`}>HTML</Link>
        <Link to={`/quiz/${"css"}`} className={`btn`}>CSS</Link>
        <Link to={`/quiz/${"javascript"}`} className={`btn`}>JavaScript</Link>
        <img src={Category} alt="" />
    </div>
  )
}

export default Quiz