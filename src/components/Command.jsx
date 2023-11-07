import React from 'react'
import command_content from '../assets/content-command.png'

export default function Command() {
    return (
        <div className='command'>
            <div className="container flex-align-center" >
                <div className="left-command">
                    <img src={command_content} alt="art photo" />
                </div>
                <div className="right-command">
                    <h1>Наша команда</h1>
                    <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
                    <div className="command-imgs">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
            </div>
            </div>
        </div>
    )
}
