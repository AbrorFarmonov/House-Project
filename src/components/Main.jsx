import React from 'react'
import main_content from '../assets/content_main.png'

export default function Main() {
  return (
    <main className='flex-align-center'>
        <div className="left-main">
            <img src={main_content} alt="photo of bird" />
        </div>
        <div className="right-main">
              <h1>Реплики картин от <span>Ink. House</span></h1>
              <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
              <button className='flex-align-center'>Продукция</button>
        </div>
    </main>
  )
}
